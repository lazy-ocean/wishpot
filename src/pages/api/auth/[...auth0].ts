import { handleAuth, handleCallback, handleLogin } from "@auth0/nextjs-auth0";
import jwt from "jsonwebtoken";
import { Session } from "@auth0/nextjs-auth0/src/session";
import { NextApiRequest } from "next";
import { ServerResponse } from "http";

const afterCallback = (
  _arg0: NextApiRequest,
  _arg1: ServerResponse,
  session: Session
) => {
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
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error: unknown) {
      if (error instanceof Error)
        res.status((error.cause as number) || 500).end(error.message);
      return String(error);
    }
  },

  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/wishes",
    });
  },
});
