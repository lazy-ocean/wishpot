import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.palette.font};
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ theme }) => theme.palette.pink};
  font-family: var(--r-font);
  color: ${({ theme }) => theme.palette.font};
  height: 100%;
`;
