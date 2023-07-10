import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacings.xs};
  background-color: ${({ theme }) => theme.palette.bgCard};
  border: 2px solid ${({ theme }) => theme.palette.font};
  min-width: 50%;
  flex-direction: column;
  margin-left: 0px;

  a {
    font-family: var(--h-font);
    font-size: clamp(0.8rem, 1rem, 1rem);
  }

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    margin-left: -2px;
  }`}
`;

export const Cards = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s};
`;

export const ItemImage = styled(Image)`
  display: block;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.palette.font};
  border-bottom: 0;
  grid-area: 1 / 1 / 2 / 2;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    border: 2px solid ${theme.palette.font};
  }`}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  flex-direction: column;
  width: 100%;
  container: card;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    flex-direction: row;
    align-items: flex-end;
    width: 60%;
  }`}
`;
