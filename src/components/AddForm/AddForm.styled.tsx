import styled from "styled-components";

export const Form = styled.form`
  grid-column: span 1;
  position: relative;
  zindex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xxs};
`;

export const Input = styled.input`
  width: 80%;
  height: 2.5rem;
  border: 2px solid ${({ theme }) => theme.palette.font};
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ theme }) => theme.palette.bgCard};
  font-family: var(--r-font);

  ${({ theme }) => `
  @media only screen and ${theme.breakpoints.desktop}{
    width: 30%;
  }`}
`;

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.palette.font};
  padding: ${({ theme }) => theme.spacings.xxs};
  background-color: ${({ theme }) => theme.palette.pink};
  font-family: var(--r-font);
  color: ${({ theme }) => theme.palette.font};
  height: 2.5rem;
  border-left: 0;
`;
