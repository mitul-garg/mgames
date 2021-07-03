import React from "react";
import { useGlobalContext } from "../context";

export const Leaderboard = () => {
  let { scores, allScores, user, setScores } = useGlobalContext();
  if (!scores) {
    // window.location.reload();
    scores = {
      cm: 0,
      rps: 0,
      snake: 0,
      ttt: 0,
      two048: 0,
      uid: user.uid,
      name: user.name,
    };
    setScores(scores);
  }
  const currentUserName = scores.name + "-" + scores.uid;
  let totalScores = allScores.map((user) => {
    let totalScore = user.ttt + user.rps + user.snake + user.two048 + user.cm;
    return {
      totalScore: totalScore,
      username: user.name + "-" + user.uid,
    };
  });
  totalScores.sort((a, b) => {
    return b.totalScore - a.totalScore;
  });
  return (
    <section className="leaderboard">
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Username</td>
            <td>Total Score</td>
          </tr>
        </thead>
        <tbody>
          {totalScores.map((score, item) => {
            let { totalScore, username } = score;
            if (currentUserName === username) {
              let dash = 0;
              for (let i = 0; i < username.length; i++) {
                if (username[i] === "-") {
                  dash = i;
                  break;
                }
              }
              username = username.substr(0, dash + 6);
              return (
                <tr key={item} className="active-leaderboard-data">
                  <td>{item + 1}</td>
                  <td>{username}</td>
                  <td>{totalScore}</td>
                </tr>
              );
            } else {
              let dash = 0;
              for (let i = 0; i < username.length; i++) {
                if (username[i] === "-") {
                  dash = i;
                  break;
                }
              }
              username = username.substr(0, dash + 6);
              return (
                <tr key={item} className="leaderboard-data">
                  <td>{item + 1}</td>
                  <td>{username}</td>
                  <td>{totalScore}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </section>
  );
};
