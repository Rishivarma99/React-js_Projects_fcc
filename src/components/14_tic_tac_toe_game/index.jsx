/* 
  0 1 2 
  3 4 5 
  6 7 8 

 RETURN NULL IN CHECK WINNERE MUST BE PLACED OUTSIDE THE LOOP 
*/

import { useEffect, useState } from "react";
import "./style.css";

const TicGame = () => {
  const [gameArray, setGameArray] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [status, setStatus] = useState("");

  console.log(gameArray);

  const handleRestart = () => {
    setGameArray(Array(9).fill(""));
    setCurrentPlayer("x");
  };
  const checkWinner = (presentArray) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      let [a, b, c] = winningPattern[i];

      if (
        presentArray[a] &&
        presentArray[a] === presentArray[b] &&
        presentArray[a] === presentArray[c]
      ) {
        // here in coditions pa[a] ensures value is not empty

        return presentArray[a];
      }
    }
    return null; // this null must be placed after the loop not inside IMPORTANT TO REMEMBER
  };

  const handleBoxClick = (i) => {
    let newArray = [...gameArray];

    if (newArray[i] || checkWinner(newArray)) {
      // imp once winner declared no more chencge in the array or game
      return;
    }
    newArray[i] = currentPlayer.toUpperCase();
    setCurrentPlayer(currentPlayer == "x" ? "o" : "x");
    setGameArray(newArray);
  };

  console.log(gameArray);
  // Create a 2D array with all values set to 0

  useEffect(() => {
    // In sue effect we check for full case or winner case

    if (!checkWinner(gameArray) && gameArray.every((item) => item !== "")) {
      // full case
      console.log("checking full");
      setStatus(`Its a Tie,Please restart Game`);
    } else if (checkWinner(gameArray)) {
      console.log("chiking winner");
      // game won by x or o
      setStatus(
        `Game Won by ${checkWinner(gameArray)}, Please Restart the game`
      );
    } else {
      // it others turs
      setStatus(`Its player ${currentPlayer.toUpperCase()} Turn`);
    }
  }, [gameArray, currentPlayer]);

  return (
    <>
      <div className="tt-main">
        <h1 className="tt-heading">Tic tac toe game</h1>

        <div className="tt-game-container">
          <div className="tt-game">
            {gameArray.map((item, i) => {
              return (
                <div
                  className="tt-box"
                  key={i}
                  onClick={() => handleBoxClick(i)}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div className="tt-display">{status}</div>

          <button
            type="button"
            className="btn btn-danger tt-button"
            onClick={() => handleRestart()}
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
};

export default TicGame;
