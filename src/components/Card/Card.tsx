import React from "react";
import { Container, ItemImage, Wrapper, BinButton } from "./card.styled";
import { RegularText } from "../../theme/typography";
import { Wish } from "../../../types";
import { Trash } from "react-feather";

const Card = ({
  item,
  handleRemoveWish,
}: {
  item: Wish;
  handleRemoveWish: (id: string) => void;
}) => {
  return (
    <Wrapper>
      <BinButton onClick={() => handleRemoveWish(item.id)}>
        <Trash />
      </BinButton>

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
