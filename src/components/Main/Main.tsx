import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Button } from "../Button/Button";
import { Container } from "./Main.styled";
import {
  MainHeading,
  RegularHeading,
  RegularText,
} from "../../theme/typography";

const Main = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Container>
      <MainHeading>Wishpot</MainHeading>
      <RegularHeading>
        Add links to products you dream about, share your list with your
        friends!
      </RegularHeading>
      {!user ? (
        <Button>
          <Link href="/api/auth/login">Login</Link>
        </Button>
      ) : (
        <Button>
          <Link href="/wishes">Go to my list</Link>
        </Button>
      )}
    </Container>
  );
};

export default Main;
