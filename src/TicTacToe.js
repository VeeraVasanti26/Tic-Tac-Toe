import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winningCombo, setWinningCombo] = useState([]);

  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];

  const calculateWinner = (board) => {
    for (let [a, b, c] of winningLines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line: [a, b, c] };
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    const result = calculateWinner(newBoard);
    if (result) setWinningCombo(result.line);
    setIsXTurn(!isXTurn);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinningCombo([]);
  };

  const result = calculateWinner(board);
  const status = result ? `Winner: ${result.winner}` : `Next Player: ${isXTurn ? 'X' : 'O'}`;

  return (
    <div className="to1">
      <h1>Tic Tac Toe</h1>
      <div className="to">
        <div className="grid">
          {board.map((value, index) => (
            <div
              key={index}
              className={`box ${winningCombo.includes(index) ? 'win' : ''}`}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>
        <p className="o">{status}</p>
        <button className="ret" onClick={handleRestart}>Restart Game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
