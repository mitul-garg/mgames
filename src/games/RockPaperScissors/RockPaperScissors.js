import React, { useState } from "react";
import "./style.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useGlobalContext } from "../../context";

export const RockPaperScissors = () => {
  const { scores, db } = useGlobalContext();
  const [score, setScore] = useState(scores.rps);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState("Lets Play!");

  const getComputerChoice = () => {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };

  const convertToWinningWord = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
      case "rp":
        return "is covered by";
      case "pr":
        return "covers";
      case "sr":
        return "is smashed by";
      case "rs":
        return "smashes";
      case "ps":
        return "is cut by";
      case "sp":
        return "cuts";
    }
  };

  const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
  };

  const win = (userChoice, computerChoice) => {
    setScore(score + 1);
    const smallUserWord = " {user} ";
    const smallComputerWord = " {comp} ";
    setResult(
      `${convertToWord(userChoice)}${smallUserWord} ${convertToWinningWord(
        userChoice,
        computerChoice
      )} ${convertToWord(computerChoice)}${smallComputerWord}. You Win!`
    );
    db.collection("scores")
      .doc(scores.uid)
      .set({
        ...scores,
        rps: score + 1,
      })
      .then()
      .catch((error) => console.log(error));
  };

  function lose(userChoice, computerChoice) {
    setCompScore(compScore + 1);
    const smallUserWord = " {user} ";
    const smallComputerWord = " {comp} ";
    setResult(
      `${convertToWord(userChoice)}${smallUserWord} ${convertToWinningWord(
        userChoice,
        computerChoice
      )} ${convertToWord(computerChoice)}${smallComputerWord}. You Lost!`
    );
  }

  function draw(userChoice, computerChoice) {
    const smallUserWord = " {user} ";
    const smallComputerWord = " {comp} ";
    setResult(
      `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(
        computerChoice
      )}${smallComputerWord}. Its a draw!`
    );
  }

  const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
  };

  return (
    <div className="rps-game">
      <div className="score-board">
        <div className="badge" id="user-label">
          You
        </div>
        <div className="badge" id="computer-label">
          Me
        </div>
        <span id="user-score">{score}</span>:
        <span id="computer-score">{compScore}</span>
      </div>

      <div className="result">
        <p>{result}</p>
      </div>

      <div className="choices">
        <div className="choice" id="r">
          <FaHandRock className="fa" onClick={() => game("r")} />
        </div>
        <div className="choice" id="p">
          <FaHandPaper className="fa" onClick={() => game("p")} />
        </div>
        <div className="choice" id="s">
          <FaHandScissors className="fa" onClick={() => game("s")} />
        </div>
      </div>

      <p id="action-message">Make your move</p>

      <p className="high-score">Your Total Wins : {score}</p>

      <h4>
        If you press the Back Button in your Browser, your score will be lost!
      </h4>
      <h4>I always start with 0 after saving your score!</h4>
      <center>
        <button onClick={() => window.location.reload()}>Save Score</button>
      </center>
    </div>
  );
};
