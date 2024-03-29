import styled from "styled-components";
import { Wrapper } from "../Card/card.styled";

/* const appearAndDisappear = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0; 
  }
`;

export const AnimatedCard = styled.div<{ delay: string; x: number; y: number }>`
  opacity: 0;
  animation: ${appearAndDisappear} 10s linear;
  animation-delay: ${({ delay }) => delay}ms;
  max-width: 50%;
`; */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.spacings.s};

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    grid-template-columns: repeat(2, 1fr);
  }`}

  ${Wrapper} {
    width: unset;
  }
`;
