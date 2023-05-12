import Head from "next/head";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSupabase } from "../../utils/supabase";
import Main from "../components/Main/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../theme";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Session } from "@auth0/nextjs-auth0/src/session";
import { definitions } from "../../types/supabase";
import { unfurl } from "unfurl.js";
import ogs from "open-graph-scraper";

const Home = ({ items }: { items: definitions["items"][] }) => {
  return (
    <div>
      <Head>
        <title>Future awesome app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Main items={items} />
        </ThemeProvider>
      </UserProvider>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    const {
      user: { accessToken },
    } = (await getSession(req, res)) as Session;
    const supabase = getSupabase(accessToken as string);

    const { data: items } = await supabase.from("items").select("*");
    let content = items;
    /*     ogs({
      url: "https://github.com/jshemas/openGraphScraper",
    })
      .then((data) => {
        const { result } = data;
        console.log(result); // hostnameMetaTag: github.com
      })
      .catch((e) => console.log(e)); */
    if (items) {
      try {
        const parsedContent = await Promise.all(
          items?.map(async (item) => {
            if (item.content?.includes("https")) {
              const meow = await ogs({ url: item.content });
              return meow.result;
            }
            return item;
          })
        );
        content = parsedContent;
      } catch (e) {
        console.log(e);
      }
    }

    console.log(content);
    return {
      props: { items: content },
    };
  },
});

export default Home;
