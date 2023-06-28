import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacings.xs};
  background-color: ${({ theme }) => theme.palette.bgCard};
  border: 2px solid ${({ theme }) => theme.palette.font};
  min-width: 50%;

  p {
    font-family: var(--h-font);
    font-size: clamp(0.8rem, 1rem, 1rem);
  }

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    border-left: 0;
  }`}
`;

export const Cards = styled.div`
  padding: ${({ theme }) => theme.spacings.s};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s};
`;

export const ItemImage = styled(Image)`
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.palette.font};
  grid-area: 1 / 1 / 2 / 2;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  flex-direction: column;

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    flex-direction: row;
    align-items: flex-end;
  }`}
`;
