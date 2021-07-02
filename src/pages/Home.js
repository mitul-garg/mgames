import React from "react";
import { useGlobalContext } from "../context";
import { Leaderboard } from "../components/Leaderboard";

export const Home = () => {
  const { user, signOut } = useGlobalContext();
  const { name, email, photo, uid } = user;
  const username = name + "-" + uid.substring(0, 5);
  return (
    <section className="home-section-center">
      <div className="user-card">
        <div className="img-container">
          <img src={photo} alt="user" className="user-pic" />
        </div>
        <h1>{name}</h1>
        <h4>{email}</h4>
        <h4>{username}</h4>
        <button className="sign-out-btn" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
      <Leaderboard />
    </section>
  );
};
