import React, { useCallback, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSupabase } from "../../utils/supabase";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Session } from "@auth0/nextjs-auth0/src/session";
import Card from "../components/Card/Card";
import { Wish } from "../../types";
import { Cards } from "../components/Card/card.styled";
import { AddWishForm } from "../components/AddForm/AddForm";
import Head from "next/head";
import { deleteWishFromDB } from "../utils/handlers/dbHandlers";

const Wishes = ({ items }: { items: Wish[] }) => {
  const { user, error, isLoading } = useUser();
  const [wishes, setWishes] = useState<Wish[]>(items);

  const handleAddedWishes = useCallback(
    (newWish) => {
      const newWishes = [newWish, ...wishes];
      setWishes(newWishes);
    },
    [setWishes, wishes]
  );

  const handleRemoveWish = useCallback(
    async (id) => {
      try {
        await deleteWishFromDB({ id, user });
        const newWishes = wishes.filter((wish) => wish.id !== id);
        setWishes(newWishes);
      } catch (e) {
        console.log(e);
      }
    },
    [user, wishes]
  );

  return (
    <>
      <Head>
        <title>My wishlist</title>
      </Head>
      <main>
        {/* <Image src={user.picture} alt={user.name} width={100} height={100} />
          <h2>{user.name}</h2>
          <p>{user.email}</p> */}

        {!error && !isLoading && user && (
          <Cards>
            <AddWishForm user={user} setWishes={handleAddedWishes} />
            {wishes &&
              wishes.map((item, i) => (
                <Card item={item} key={i} handleRemoveWish={handleRemoveWish} />
              ))}
          </Cards>
        )}
      </main>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    const {
      user: { accessToken },
    } = (await getSession(req, res)) as Session;
    const supabase = getSupabase(accessToken as string);

    const { data: items } = await supabase.from("items").select("*");

    return {
      props: { items: items },
    };
  },
});

export default Wishes;
