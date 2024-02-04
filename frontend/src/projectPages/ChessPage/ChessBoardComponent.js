import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';

const { Chess } = require('chess.js')

export const ChessBoardComponent = () => {
  const [boardOrientation, setBoardOrientation] = useState('white');
  const [game, setGame] = useState(new Chess());
  const [playerColour, setPlayerColour] = useState('white');
  const [turn, setTurn] = useState('player');
  const [winner, setWinner] = useState('');

  const startNewGame = (colour = 'white') => {
    console.log(`New game as ${colour}`)
    const newGame = new Chess();
    setGame(newGame);
    setPlayerColour(colour);
    (colour == 'white') ? setTurn('player') : setTurn('computer');
    setBoardOrientation(colour);
  };

  const onPieceDrop = (sourceSquare, targetSquare) => {
    // Don't move if not turn
    if ((game.turn() === 'w' && playerColour !== 'white') ||
        (game.turn() === 'b' && playerColour !== 'black') ||
        turn !== 'player') {
            return false;
    }
    // Chess.js move
    const move = game.move({
        from: sourceSquare,
        to: targetSquare
    });
    // Illegal move
    if (move == null) return false;

    // Update game state
    setGame(prev => new Chess(prev.fen()));

    // Check if player checkmated computer
    if (game.moves().length == 0) {
        setWinner('Player');
        setTurn('');
    } else {
        setTurn('computer');
    }

    return true; // return true to accept the move
  };

  const computerMove = () => {
    // Check if game is still going
    if (game.isGameOver()) { return false; }
    console.log('Computer be moving')
    // Randomly select move
    const moves = game.moves()
    const move = moves[Math.floor(Math.random() * moves.length)]
    game.move(move)
    // Update variables
    setGame(prev => new Chess(prev.fen()));
    // Check if computer checkmated player
    if (game.moves().length == 0) {
        setWinner('Computer');
        setTurn('');
    } else {
        setTurn('player');
    }
    // Check if computer got
  };

  useEffect(() => {
    if (turn === 'computer') {
        computerMove();
    }
  }, [turn]);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }} className='Chess-board'>
        <h1>BETFUU - Chess Engine</h1>
        <button onClick={() => startNewGame('white')}>Play as White</button>
        <button onClick={() => startNewGame('black')}>Play as Black</button>
      <Chessboard
        id="BasicChessboard"
        position={game.fen()}
        boardOrientation={boardOrientation}
        onPieceDrop={onPieceDrop}
        boardWidth={ Math.min(window.innerWidth * 0.9, 600) }
      />
      <button onClick={() => setBoardOrientation(boardOrientation === 'white' ? 'black' : 'white')}>
        Flip Board
      </button>
        <div>{winner === '' ? `Turn ${turn}` : `Winner: ${winner}`}</div>
    </div>
  );
}
