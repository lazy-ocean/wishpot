import { useUser } from "@auth0/nextjs-auth0/client";
import {
  HeaderContainer,
  UserIcon,
  UserPanel,
  UserData,
} from "./Header.styled";
import { SmallHeading, RegularText } from "../../theme/typography";
import { ReactElement } from "react";

export const Header = ({ children }: { children: ReactElement }) => {
  const { user } = useUser();

  return (
    <HeaderContainer>
      {children}
      {user && (
        <UserPanel>
          <UserIcon
            src={user.picture as string}
            alt={user.name as string}
            width={40}
            height={40}
          />
          <UserData>
            <SmallHeading>{user.nickname}</SmallHeading>
            <RegularText>{user.email}</RegularText>
          </UserData>
        </UserPanel>
      )}
    </HeaderContainer>
  );
};
{
  /*       <button>
            <Link href="/api/auth/logout">Logout</Link>
          </button> */
}
