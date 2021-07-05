import React, { useState } from "react";
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
  let totalScores = allScores.map((scores) => {
    let totalScore = scores.ttt + scores.rps;
    return {
      totalScore: totalScore,
      name: scores.name,
      ttt: scores.ttt,
      rps: scores.rps,
      cm: scores.cm,
      uid: scores.uid,
    };
  });

  const [leaderboardScores, setLeaderboardScores] = useState(totalScores);

  totalScores.sort((a, b) => {
    if (a.totalScore === b.totalScore) return a.name - b.name;
    return b.totalScore - a.totalScore;
  });
  // console.log(totalScores);

  const sortByTTT = () => {
    totalScores.sort((a, b) => {
      if (a.ttt === b.ttt) return b.totalScore - a.totalScore;
      return b.ttt - a.ttt;
    });
    setLeaderboardScores([...totalScores]);
  };

  const sortByRPS = () => {
    totalScores.sort((a, b) => {
      if (a.rps === b.rps) return b.totalScore - a.totalScore;
      return b.rps - a.rps;
    });
    setLeaderboardScores([...totalScores]);
  };

  const sortByTotal = () => {
    totalScores.sort((a, b) => {
      if (a.totalScore === b.totalScore) return a.name - b.name;
      return b.totalScore - a.totalScore;
    });
    setLeaderboardScores([...totalScores]);
  };

  return (
    <section className="leaderboard">
      <h1>Leaderboard</h1>
      <div className="underline"></div>
      <div className="btn-container">
        <button onClick={() => sortByTotal()}>Total</button>
        <button onClick={() => sortByTTT()}>TicTacToe</button>
        <button onClick={() => sortByRPS()}>RockPaperScissors</button>
      </div>
      <div className="underline"></div>
      <div className="rankings">
        {leaderboardScores.map((item, index) => {
          if (item.uid === scores.uid) {
            return (
              <div key={index} className="leaderboard-card current-card">
                <div className="first-div">
                  <p>{index + 1}</p>
                  <p>{item.name + "-" + item.uid.substring(0, 5)}</p>
                  <p></p>
                </div>
                <div className="second-div">
                  <p>Total Score : {item.totalScore}</p>
                  <p>TicTacToe : {item.ttt}</p>
                  <p>RockPaperScissors : {item.rps}</p>
                </div>
              </div>
            );
          }
          return (
            <div key={index} className="leaderboard-card">
              <div className="first-div">
                <p>{index + 1}</p>
                <p>{item.name + "-" + item.uid.substring(0, 5)}</p>
                <p></p>
              </div>
              <div className="second-div">
                <p>Total Score : {item.totalScore}</p>
                <p>TicTacToe : {item.ttt}</p>
                <p>RockPaperScissors : {item.rps}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
