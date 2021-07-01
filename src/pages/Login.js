import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { GiCardPick, GiRattlesnake, GiTicTacToe } from "react-icons/gi";
import logo from "../images/logo.svg";
import rps from "../images/rps.svg";
import two048 from "../images/2048.svg";

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
          <GiRattlesnake className="login-game-icon" />
        </div>
        <div>
          <img src={two048} className="login-game-img" alt="2048" />
        </div>
        <div>
          <GiCardPick className="login-game-icon" />
        </div>
      </div>
    </div>
  );
};
