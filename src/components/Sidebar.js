import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { ImCross } from "react-icons/im";
import logo from "../images/logo.svg";
export const Sidebar = () => {
  const { showSidebar, setShowSidebar, isLoggedIn } = useGlobalContext();
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
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/rockpaperscissors" className="game-name">
            Rock Paper Scissors
          </Link>
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/snake" className="game-name">
            Snake
          </Link>
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/2048" className="game-name">
            2048
          </Link>
        </li>
        <li onClick={() => setShowSidebar(false)}>
          <Link to="/games/cardmatch" className="game-name">
            Card Match
          </Link>
        </li>
      </ul>
      <footer className="sidebar-footer">
        {/* <button className="btn">{isLoggedIn ? "log out" : "log in"}</button> */}
      </footer>
    </section>
  );
};
