import styled from "styled-components";

export const Form = styled.form`
  grid-column: span 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xxs};
`;

export const Input = styled.input`
  width: 80%;
  border: 2px solid ${({ theme }) => theme.palette.font};
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ theme }) => theme.palette.bgCard};
  font-family: var(--r-font);

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    width: 30%;
  }`}

  &:has(+ button) {
    border-right: 0;
  }
`;
