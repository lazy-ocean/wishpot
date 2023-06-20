import React from "react";
import { ImageObject } from "open-graph-scraper/dist/lib/types";
import { Container, ItemImage, Wrapper } from "./card.styled";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Wrapper>
      <ItemImage
        src={(item?.ogImage as ImageObject)?.url ?? "https://placehold.co/100"}
        alt={item?.ogTitle ?? "alt"}
        width={160}
        height={160}
      />
      <Container>
        <p>{item?.ogTitle || "placeholder"}</p>
      </Container>
    </Wrapper>
  );
};

export default Card;
