import React, { useEffect, useRef, useState } from "react";
import { Container, ItemImage, Wrapper, BinButton } from "./card.styled";
import { RegularText } from "../../theme/typography";
import { Wish } from "../../../types";
import { Trash } from "react-feather";
import { Button, ButtonSize } from "../Button/Button";

const DEFAULT_COUNTDOWN_TIME = 7;

const Card = ({
  item,
  removeWish,
}: {
  item: Wish;
  removeWish?: (id: string) => Promise<void>;
}) => {
  const [displayUndo, setDisplayUndo] = useState(false);
  const [time, setTime] = useState(DEFAULT_COUNTDOWN_TIME);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(undefined);

  const handleRemoveWish = () => {
    setDisplayUndo(true);
  };

  useEffect(() => {
    if (displayUndo) {
      if (time === 0) {
        removeWish(item.id)
          .then(() => setDisplayUndo(false))
          .catch((e) => console.log(e));
        return;
      }

      timeoutRef.current = setTimeout(() => {
        setTime((prevCount) => prevCount - 1);
      }, 1000);

      return () => {
        clearTimeout(timeoutRef.current);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, displayUndo, item.id]);

  const handleUndo = () => {
    setDisplayUndo(false);
    clearTimeout(timeoutRef.current);
    setTime(DEFAULT_COUNTDOWN_TIME);
  };

  return displayUndo ? (
    <Button size={ButtonSize.l} onClick={handleUndo}>
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
