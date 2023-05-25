import React from "react";
import Image from "next/image";
import { ImageObject } from "open-graph-scraper/dist/lib/types";

const Card = ({ item }) => {
  return (
    <div>
      <Image
        src={(item?.ogImage as ImageObject)?.url ?? "https://placehold.co/100"}
        alt={item?.ogTitle ?? "alt"}
        width={100}
        height={100}
      />
      <p>{item?.ogTitle || "placeholder"}</p>
    </div>
  );
};

export default Card;
