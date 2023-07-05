import { useUser } from "@auth0/nextjs-auth0/client";
import { HeaderContainer } from "./Header.styled";
import Link from "next/link";

export const Header = ({ children }) => {
  const { user } = useUser();
  return (
    <HeaderContainer>
      {user && (
        <button>
          <Link href="/api/auth/logout">Logout</Link>
        </button>
      )}
      {children}
    </HeaderContainer>
  );
};
