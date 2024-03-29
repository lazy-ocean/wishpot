import styled from "styled-components";

export const MainHeading = styled.h1`
  font-family: var(--h-font);
  font-size: clamp(1em, 2.5rem, 3rem);
`;

export const SubHeading = styled.h2`
  font-family: var(--h-font);
  font-size: clamp(1rem, 1.8rem, 1.8rem);
`;

export const RegularHeading = styled.h3`
  font-family: var(--h-font);
  font-size: clamp(0.8rem, 1.2rem, 1.2rem);
  text-align: center;
`;

export const SmallHeading = styled.h4`
  font-family: var(--h-font);
  font-size: 1.2rem;
`;

export const RegularText = styled.p`
  font-size: 1rem;
  font-family: var(--r-font);
`;
