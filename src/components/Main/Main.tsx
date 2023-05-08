import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSupabase } from "../../../utils/supabase";
import { definitions } from "../../../types/supabase";

const Main = ({ items }: { items: definitions["items"][] }) => {
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
      {user ? (
        <button>
          <a href="/api/auth/logout">Logout</a>
        </button>
      ) : (
        <button>
          <a href="/api/auth/login">Login</a>
        </button>
      )}

      {!error && !isLoading && user && (
        <div>
          <Image
            src={user.picture as string}
            alt={user.name as string}
            width={100}
            height={100}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <button>Add</button>
          </form>
          {items && items.map((item, i) => <p key={i}>{item.content}</p>)}
        </div>
      )}
    </main>
  );
};

export default Main;
