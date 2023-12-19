import ogs from "open-graph-scraper";
import { OgObject } from "open-graph-scraper/dist/lib/types";
import { FilteredResponse } from "../../../types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { url } = JSON.parse(req.body as string);
  let result = null;
  try {
    const withTimeout = (millis: number, promise: Promise<unknown>) => {
      const timeout = new Promise((resolve, reject) =>
        setTimeout(() => reject(`Timed out`), millis)
      );
      return Promise.race([promise, timeout]);
    };

    if (url.includes("https")) {
      const data = (await withTimeout(4000, ogs({ url }))) as {
        result: OgObject;
      };
      result = (data.result || null) as FilteredResponse;
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
