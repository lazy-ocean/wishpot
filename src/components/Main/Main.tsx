import React from "react";
import { Header, Container } from "./Main.styled";

const Main = ({ version }: { version: string }) => {
  return (
    <main>
      <Container>
        <Header>go build something awesome</Header>
        <p>now on Next.js v{version}</p>
        <img
          src="https://c.tenor.com/bCfpwMjfAi0AAAAC/cat-typing.gif"
          alt="cat typing"
        />
      </Container>
    </main>
  );
};

export default Main;
