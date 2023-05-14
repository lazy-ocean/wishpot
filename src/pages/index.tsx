import Head from "next/head";
import Main from "../components/Main/Main";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Future awesome app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
};

export default Home;
