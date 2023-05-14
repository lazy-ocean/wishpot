import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const Main = () => {
  const { user, error, isLoading } = useUser();

  return (
    <main>
      <p>Index page</p>
      {user && !error && !isLoading ? (
        <button>
          <Link href="/api/auth/logout">Logout</Link>
        </button>
      ) : (
        <button>
          <Link href="/api/auth/login">Login</Link>
        </button>
      )}
    </main>
  );
};

export default Main;
