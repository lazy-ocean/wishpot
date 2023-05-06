import React from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

const Main = () => {
  const { user, error, isLoading } = useUser();

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
        </div>
      )}
    </main>
  );
};

export default Main;
