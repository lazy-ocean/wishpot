import {
  handleAuth,
  handleCallback,
  getSession,
  handleLogin,
} from "@auth0/nextjs-auth0";
import jwt from "jsonwebtoken";
import { Session } from "@auth0/nextjs-auth0/src/session";
import { NextApiRequest, NextApiResponse } from "next";
import { ServerResponse } from "http";
import refreshAccessToken from "./refreshAccessToken";

export const handleTokenRenewal = async (
  session: Session
): Promise<Session> => {
  const accessTokenExpiration = session.accessTokenExpiresAt;
  const currentTime = Date.now() / 1000;

  if (accessTokenExpiration - currentTime < 300) {
    try {
      const renewedToken = await refreshAccessToken(session.user);
      session.user.accessToken = renewedToken;
    } catch (error) {
      console.error("Token renewal failed:", error);
      session.logout();
    }
  }

  return session;
};

const afterCallback = async (
  _req: NextApiRequest,
  _res: ServerResponse,
  session: Session
) => {
  const accessTokenExpiration = session.user.accessTokenExpiresAt;
  const currentTime = Date.now() / 1000;

  if (accessTokenExpiration - currentTime < 300)
    session = await handleTokenRenewal(session);

  const payload = {
    userId: session.user.sub,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  };

  session.user.accessToken = jwt.sign(
    payload,
    process.env.SUPABASE_SIGNING_SECRET!
  );

  return session;
};

export default handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      let session = await getSession(req, res);
      if (session) session = await handleTokenRenewal(session);

      await handleCallback(req, res, { afterCallback });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status((error.cause as number) || 500).end(error.message);
        return console.log(error);
      }
    }
  },

  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/wishes",
    });
  },
});
