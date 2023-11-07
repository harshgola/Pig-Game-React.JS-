import React, { Fragment, useState } from "react";
import "./playerscore.css";

import diceImage_1 from "../image/dice-1.png";
import diceImage_2 from "../image/dice-2.png";
import diceImage_3 from "../image/dice-3.png";
import diceImage_4 from "../image/dice-4.png";
import diceImage_5 from "../image/dice-5.png";
import diceImage_6 from "../image/dice-6.png";

const PlayerScore = () => {
  const [imgSrc, setImgSrc] = useState();
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [holdScore, setHoldScore] = useState(0);
  const [holdScore2, setHoldScore2] = useState(0);
  const [playing, setPlaying] = useState(true);
  const player0El = document.querySelector(".player--0");
  const player1El = document.querySelector(".player--1");

  const switchPlayer = function () {
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    setPlaying(playing === true ? false : true);
  };
  //   console.log(player0El.contains("player--active"));
  const DiceImage = () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1;

    let displayImage = document.querySelector(".dice");
    if (diceNumber === 1) {
      displayImage.src = diceImage_1;
    } else if (diceNumber === 2) {
      displayImage.src = diceImage_2;
    } else if (diceNumber === 3) {
      displayImage.src = diceImage_3;
    } else if (diceNumber === 4) {
      displayImage.src = diceImage_4;
    } else if (diceNumber === 5) {
      displayImage.src = diceImage_5;
    } else if (diceNumber === 6) {
      displayImage.src = diceImage_6;
    }
    // let checkPlayer1 = player0El.classList.contains("player--active");
    // let checkPlayer2 = player1El.classList.contains("player--active");
    if (playing) {
      if (diceNumber !== 1) {
        let currentScore = score + diceNumber;
        setScore(currentScore);
      } else {
        setScore(0);
        switchPlayer();
      }
    } else {
      if (diceNumber !== 1) {
        let currentScore = score2 + diceNumber;
        setScore2(currentScore);
      } else {
        setScore2(0);
        switchPlayer();
      }
    }
  };
  const changeImg = () => {
    setImgSrc(DiceImage);
  };
  const scoreHold1 = () => {
    let total = score + holdScore;
    setHoldScore(total);
    setScore(0);
  };
  const scoreHold2 = () => {
    let total = score2 + holdScore2;
    setHoldScore2(total);
    setScore2(0);
  };
  const NewGame = () => {
    setHoldScore(0);
    setHoldScore2(0);
    setScore(0);
    setScore2(0);
  };

  return (
    <Fragment>
      <section className="player player--0 player--active">
        <h2 className="name" id="name--0">
          1
        </h2>
        <p className="score" id="score--0">
          {holdScore}
        </p>

        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {score}
          </p>
        </div>
      </section>
      <section className="player player--1">
        <h2 className="name" id="name--1">
          2
        </h2>
        <p className="score" id="score--1">
          {holdScore2}
        </p>

        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            {score2}
          </p>
        </div>
      </section>
      <img src={imgSrc} alt="Playing dice" className="dice" />
      <button className="btn btn--roll" onClick={changeImg}>
        🎲 Roll dice
      </button>
      <button className="btn btn--new" onClick={NewGame}>
        🔄 New game
      </button>
      {playing && (
        <button className="btn btn--hold" onClick={scoreHold1}>
          📥 Hold
        </button>
      )}
      {!playing && (
        <button className="btn btn--hold" onClick={scoreHold2}>
          📥 Hold
        </button>
      )}
    </Fragment>
  );
};

export default PlayerScore;
