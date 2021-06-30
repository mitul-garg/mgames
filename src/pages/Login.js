import React from "react";
import { useGlobalContext } from "../context";

export const Login = () => {
  const { setIsLoggedIn, signIn } = useGlobalContext();

  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
};
