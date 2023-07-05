import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 4vmin ${({ theme }) => theme.spacings.s};
  display: flex;
  justify-content: flex-end;
  background: transparent;
  z-index: 100;
  /*   background: ${({ theme }) =>
    `linear-gradient(${theme.palette.pink}, 30%, ${theme.palette.bg})`}; */
  /*   background-color: ${({ theme }) => theme.palette.pink}; */
  /*  border-bottom: 2px solid ${({ theme }) => theme.palette.font}; */
`;
