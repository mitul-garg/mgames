import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import { Square } from "./Square";
import "./tictactoe.css";

const initialState = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
  const { scores, db } = useGlobalContext();
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);
  const [score, setScore] = useState(scores.ttt);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    updateGameState(strings);
    updateIsXChance(!isXChance);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      updateGameState(initialState);
      winner === "X" ? alert("You Won!!") : alert("You Lost!!");
      if (winner === "X") {
        setScore(score + 1);
        db.collection("scores")
          .doc(scores.uid)
          .set({
            ...scores,
            ttt: score + 1,
          })
          .then()
          .catch((error) => console.log(error));
      }
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      <h1>Lets see how many times can you make your X win!!</h1>
      <h3>Longest Streak of your winning X will be your score!!</h3>
      <p className="score">Score : {score}</p>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          state={gameState[0]}
          onClick={() => onSquareClicked(0)}
        />
        <Square
          className="b-bottom-right"
          state={gameState[1]}
          onClick={() => onSquareClicked(1)}
        />
        <Square
          className="b-bottom"
          state={gameState[2]}
          onClick={() => onSquareClicked(2)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          state={gameState[3]}
          onClick={() => onSquareClicked(3)}
        />
        <Square
          className="b-bottom-right"
          state={gameState[4]}
          onClick={() => onSquareClicked(4)}
        />
        <Square
          className="b-bottom"
          state={gameState[5]}
          onClick={() => onSquareClicked(5)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-right"
          state={gameState[6]}
          onClick={() => onSquareClicked(6)}
        />
        <Square
          className="b-right"
          state={gameState[7]}
          onClick={() => onSquareClicked(7)}
        />
        <Square state={gameState[8]} onClick={() => onSquareClicked(8)} />
      </div>
      <button onClick={() => updateGameState(initialState)}>Clear Game</button>
    </div>
  );
};
