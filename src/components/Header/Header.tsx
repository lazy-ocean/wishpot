import { useUser } from "@auth0/nextjs-auth0/client";
import {
  HeaderContainer,
  UserIcon,
  UserPanel,
  UserData,
} from "./Header.styled";
import { SmallHeading, RegularText } from "../../theme/typography";
import { ReactElement } from "react";
import { Button } from "../Button/Button";
import Link from "next/link";

export const Header = ({ children }: { children: ReactElement }) => {
  const { user } = useUser();

  return (
    <HeaderContainer>
      {children}
      {user && (
        <UserPanel>
          <Button>
            <Link href="/api/auth/logout">Logout</Link>
          </Button>

          <UserIcon src={user.picture} alt={user.name} width={40} height={40} />
          <UserData>
            <SmallHeading>{user.nickname}</SmallHeading>
            <RegularText>{user.email}</RegularText>
          </UserData>
        </UserPanel>
      )}
    </HeaderContainer>
  );
};
