import { NextApiRequest, NextApiResponse } from "next";
import { getSupabase } from "../../../utils/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const supabase = getSupabase();

    const { data: wishes, error } = await supabase.from("wishes").select("*");

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    return res.status(200).json(wishes);
  } catch (error) {
    console.error("Error fetching public data:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
