import React from "react";
import { useGlobalContext } from "../context";

export const Home = () => {
  const { user, signOut } = useGlobalContext();
  return (
    <div>
      <h1>home page</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <button className="sign-out-btn" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
};
