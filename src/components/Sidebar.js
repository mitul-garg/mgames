import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { ImCross } from "react-icons/im";
import { GiCardPick, GiTicTacToe } from "react-icons/gi";
import logo from "../images/logo.svg";
import rps from "../images/rps.svg";

export const Sidebar = () => {
  const url = "https://mgames-cardmatch.netlify.app";
  const { showSidebar, setShowSidebar } = useGlobalContext();
  if (showSidebar) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
  return (
    <section className={`${showSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
      <header className="sidebar-header">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="sidebar-logo"
            onClick={() => setShowSidebar(false)}
          />
        </Link>
        <ImCross
          className="close-button"
          onClick={() => setShowSidebar(false)}
        />
      </header>
      <ul className="game-links">
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/tictactoe" className="game-name">
            Tic Tac Toe
          </Link>
          <GiTicTacToe className="game-icon" />
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/rockpaperscissors" className="game-name">
            Rock Paper Scissors{" "}
          </Link>
          <img src={rps} alt="rps" className="game-icon-image rps" />
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <a href={url} className="game-name">
            Play a Fun Game!!
          </a>
          <GiCardPick className="game-icon" />
        </li>
      </ul>
    </section>
  );
};
