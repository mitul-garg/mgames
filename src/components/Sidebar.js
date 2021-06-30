import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { ImCross } from "react-icons/im";
import { GiCardPick, GiRattlesnake, GiTicTacToe } from "react-icons/gi";
import logo from "../images/logo.svg";
import rps from "../images/rps.svg";
import two048 from "../images/2048.svg";
export const Sidebar = () => {
  const { showSidebar, setShowSidebar, signOut, user } = useGlobalContext();
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
          <Link to="/games/snake" className="game-name">
            Snake
          </Link>
          <GiRattlesnake className="game-icon" />
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/2048" className="game-name">
            2048
          </Link>
          <img src={two048} alt="2048" className="game-icon-image" />
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/cardmatch" className="game-name">
            Card Match
          </Link>
          <GiCardPick className="game-icon" />
        </li>
      </ul>
      <footer className="sidebar-footer">
        <button onClick={() => signOut()}>Sign Out</button>
        <h1>{user.displayName}</h1>
      </footer>
    </section>
  );
};
