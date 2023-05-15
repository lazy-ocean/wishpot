import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSupabase } from "../../utils/supabase";
import Link from "next/link";
import { OgObject, ImageObject } from "open-graph-scraper/dist/lib/types";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import ogs from "open-graph-scraper";
import { Session } from "@auth0/nextjs-auth0/src/session";

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
          {items &&
            items.map((item, i) => (
              <div key={i}>
                <Image
                  src={
                    (item?.ogImage as ImageObject)?.url ??
                    "https://placehold.co/100"
                  }
                  alt={item?.ogTitle ?? "alt"}
                  width={100}
                  height={100}
                />
                <p>{item?.ogTitle || "placeholder"}</p>
              </div>
            ))}
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

    return {
      props: { items: content },
    };
  },
});

export default Wishes;
