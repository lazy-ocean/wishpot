import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 4vmin ${({ theme }) => theme.spacings.s};
  display: flex;
  justify-content: flex-end;
  background: transparent;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xs};
`;

export const UserPanel = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xxs};
  align-items: center;
`;

export const UserIcon = styled(Image)`
  border-radius: 50%;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
`;
