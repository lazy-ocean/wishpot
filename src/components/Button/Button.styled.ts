import styled from "styled-components";
import { ButtonSize } from "./Button";

const BUTTON_SIZES = {
  l: "1rem",
  m: "0.8rem",
  s: "0.5rem",
};

export const Button = styled.button<{ size: ButtonSize }>`
  border: 2px solid ${({ theme }) => theme.palette.font};
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ theme }) => theme.palette.pink};
  font-family: var(--r-font);
  color: ${({ theme }) => theme.palette.font};
  height: 100%;
  cursor: pointer;
  width: fit-content;
  ${({ size }) => `font-size: ${BUTTON_SIZES[size]}`};

  a {
    ${({ size }) => `font-size: ${BUTTON_SIZES[size]}`}
  }
`;
