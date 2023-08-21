import { OgObject } from "open-graph-scraper/dist/lib/types";

export interface FilteredResponse {
  value: OgObject[];
  status: "fulfilled" | "rejected";
}

export interface Wish {
  url: string;
  image?: string;
  title?: string;
  description?: string;
  id: string;
}
