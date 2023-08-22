import Head from "next/head";
import Main from "../components/Main/Main";

const Home = ({ wishes }) => {
  return (
    <>
      <Head>
        <title>Wishpot - your ultimate wishlist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main wishes={wishes} />
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`${process.env.APP_URL}/api/wishes`);
  const wishes = await response.json();

  return {
    props: {
      wishes,
    },
  };
}

export default Home;
