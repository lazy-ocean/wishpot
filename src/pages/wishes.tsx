import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSupabase } from "../../utils/supabase";
import Link from "next/link";
import { OgObject } from "open-graph-scraper/dist/lib/types";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import ogs from "open-graph-scraper";
import { Session } from "@auth0/nextjs-auth0/src/session";
import Card from "../components/Card/Card";
import { FilteredResponse } from "../../types";

const Wishes = ({ items }: { items: OgObject[] }) => {
  const { user, error, isLoading } = useUser();
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = getSupabase(user?.accessToken as string);
    await supabase
      .from("items")
      .insert({ title: "test title", content, user_id: user?.sub });
    setContent("");
  };

  return (
    <main>
      {user && (
        <button>
          <Link href="/api/auth/logout">Logout</Link>
        </button>
      )}

      {!error && !isLoading && user && (
        <div>
          <Image src={user.picture} alt={user.name} width={100} height={100} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <button>Add</button>
          </form>
          {items && items.map((item, i) => <Card item={item} key={i} />)}
        </div>
      )}
    </main>
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

    if (items) {
      try {
        const withTimeout = (millis: number, promise: Promise<unknown>) => {
          const timeout = new Promise((resolve, reject) =>
            setTimeout(() => reject(`Timed out`), millis)
          );
          return Promise.race([promise, timeout]);
        };

        const parsedContent = await Promise.allSettled(
          items?.map(async (item) => {
            if (item.content?.includes("https")) {
              const data = await withTimeout(3000, ogs({ url: item.content }));
              return ((data as { result: OgObject }).result ||
                null) as FilteredResponse;
            }
            return item;
          })
        );

        content = parsedContent.map((v) => v.status === "fulfilled" && v.value);
      } catch (e) {
        console.log(e);
      }
    }

    return {
      props: { items: content },
    };
  },
});

export default Wishes;
