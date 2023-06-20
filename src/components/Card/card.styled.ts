import Image from "next/image";
import styled from "styled-components";

export const Header = styled.h4`
  font-size: 2rem;
  font-weight: 200;
`;

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  background-color: rgb(240, 227, 216);
  border: 2px solid black;
  min-width: 50%;
  border-left: 0;

  p {
    font-family: var(--h-font);
  }
`;

export const Cards = styled.div`
  padding: 2rem;
`;

export const ItemImage = styled(Image)`
  object-fit: cover;
  border: 2px solid black;
  grid-area: 1 / 1 / 2 / 2;
`;

export const BorderEl = styled.div`
  background-color: black;
  padding: 10px;
`;

export const Wrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-end;
  position: relative;
`;
