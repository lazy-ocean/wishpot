import { Classic } from "@theme-toggles/react";
import styled from "styled-components";

export const Switcher = styled(Classic)`
  margin-left: auto;
  color: ${({ theme }) => theme.palette.font};
  svg {
    width: 3rem;
    height: 3rem;
  }
`;
