import React, { useState } from "react";

function TicTacToeOffline() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);

    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        return; // Exit the function after setting the winner
      }
    }

    if (!newBoard.includes("")) {
      setWinner("Draw");
    }

    setXIsNext(!xIsNext); // Only toggle player after all checks
  };

  const renderSquare = (index) => {
    return (
      <button
        className="square"
        onClick={() => handleClick(index)}
        style={{ width: "30px", height: "40px", margin: "10px" }}
      >
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info mt-4">
        {winner ? (
          <div>
            Winner: {winner === "Draw" ? "Draw" : winner}
            <div className="my-3">
              <button className="btn btn-primary ml-2" onClick={resetGame}>
                Reset Game
              </button>
            </div>
          </div>
        ) : (
          <div>Next Player: {xIsNext ? "X" : "O"}</div>
        )}
      </div>
    </div>
  );
}

export default TicTacToeOffline;
