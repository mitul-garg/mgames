import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { ImCross } from "react-icons/im";
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
        {/* saare games ke icons daalne hei aur thoda kuch animation */}
      </div>
    </div>
  );
};
