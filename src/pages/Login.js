import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { GiCardPick, GiTicTacToe } from "react-icons/gi";
import logo from "../images/logo.svg";
import rps from "../images/rps.svg";

export const Login = () => {
  const { signIn } = useGlobalContext();
  return (
    <div className="section-center">
      <img src={logo} alt="logo" className="sign-in-logo" />
      <h1 className="sign-in-heading">
        Sign In with your Google Account and Enjoy the Games!
      </h1>
      <button className="sign-in-btn" onClick={() => signIn()}>
        Sign In
        <AiFillGoogleCircle />
      </button>
      <div className="display-game-icons">
        <div>
          <GiTicTacToe className="login-game-icon" />
        </div>
        <div>
          <img src={rps} className="login-game-img" alt="rps" />
        </div>
        <div>
          <GiCardPick className="login-game-icon" />
        </div>
      </div>
    </div>
  );
};
