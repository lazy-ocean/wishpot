import React from "react";
import { Container, ItemImage, Wrapper } from "./card.styled";
import { RegularText } from "../../theme/typography";
import { Wish } from "../../../types";

const Card = ({ item }: { item: Wish }) => {
  return (
    <Wrapper>
      <a href={item.url}>
        <ItemImage
          src={item?.image ?? "https://placehold.co/100"}
          alt={item?.title ?? "alt"}
          width={160}
          height={160}
        />
      </a>
      <Container>
        <a>{item?.title || "placeholder"}</a>
        <RegularText>{item.description || "some descr"}</RegularText>
      </Container>
    </Wrapper>
  );
};

export default Card;
