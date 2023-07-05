import React from "react";
import { ImageObject } from "open-graph-scraper/dist/lib/types";
import { Container, ItemImage, Wrapper } from "./card.styled";
import { OgObject } from "open-graph-scraper/dist/lib/types";
import { RegularText } from "../../theme/typography";

const Card = ({ item }: { item: OgObject }) => {
  return (
    <Wrapper>
      <a href={item.requestUrl}>
        <ItemImage
          src={
            (item?.ogImage as ImageObject)?.url ?? "https://placehold.co/100"
          }
          alt={item?.ogTitle ?? "alt"}
          width={160}
          height={160}
        />
      </a>
      <Container>
        <a>{item?.ogTitle || "placeholder"}</a>
        <RegularText>{item.ogDescription}</RegularText>
      </Container>
    </Wrapper>
  );
};

export default Card;
