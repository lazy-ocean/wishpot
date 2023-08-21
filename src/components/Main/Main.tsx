import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Button, ButtonSize } from "../Button/Button";
import { Container } from "./Main.styled";
import { MainHeading, RegularHeading } from "../../theme/typography";
import { WishesPanel } from "../Panel/WishesPanel";

const Main = ({ wishes }) => {
  const { user } = useUser();

  return (
    <>
      <Container>
        <MainHeading>Wishpot</MainHeading>
        <RegularHeading>
          Add links to products you dream about, share your list with your
          friends!
        </RegularHeading>
        {!user ? (
          <Button size={ButtonSize.l}>
            <Link href="/api/auth/login">Login</Link>
          </Button>
        ) : (
          <Button size={ButtonSize.l}>
            <Link href="/wishes">Go to my list</Link>
          </Button>
        )}
      </Container>
      <WishesPanel wishes={wishes} />
    </>
  );
};

export default Main;
