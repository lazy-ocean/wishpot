import { OgObject } from "open-graph-scraper/dist/lib/types";

export interface FilteredResponse {
  value: OgObject[];
  status: "fulfilled" | "rejected";
}
