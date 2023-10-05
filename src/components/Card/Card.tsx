import React, { useEffect, useState } from "react";
import { Container, ItemImage, Wrapper, BinButton } from "./card.styled";
import { RegularText } from "../../theme/typography";
import { Wish } from "../../../types";
import { Trash } from "react-feather";
import { Button, ButtonSize } from "../Button/Button";

const Card = ({
  item,
  removeWish,
}: {
  item: Wish;
  removeWish?: (id: string) => void;
}) => {
  const [displayUndo, setDisplayUndo] = useState(false);
  const [time, setTime] = useState(7);

  const handleRemoveWish = () => {
    setDisplayUndo(true);
  };

  useEffect(() => {
    if (displayUndo) {
      if (time === 0) {
        removeWish(item.id);
        setDisplayUndo(false);
        return;
      }

      const interval = setInterval(() => {
        setTime((prevCount) => prevCount - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, displayUndo]);

  return displayUndo ? (
    <Button size={ButtonSize.l} onClick={() => setDisplayUndo(false)}>
      <p>Undo deleting? {time}s left...</p>
    </Button>
  ) : (
    <Wrapper>
      {removeWish && (
        <BinButton onClick={handleRemoveWish}>
          <Trash />
        </BinButton>
      )}

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
