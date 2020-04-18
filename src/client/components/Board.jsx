import React from 'react';
import { useSelector } from 'react-redux';
import TileRow from './TileRow';

// import styles from '../stylesheet/board.css';


const Board = () => {
  const { socket } = useSelector((store) => store.socket);
  const {
    gameBoard,
    sessionID,
    currUser,
    currTeamTurn,
    guessesLeft,
  } = useSelector((store) => store.game);

  const handleTileClick = (affiliation, boardLocation) => {
    const { team } = currUser;
    if (currTeamTurn === team && guessesLeft > 0) {
      console.log('we made it thru button click');
      socket.emit('tile clicked', {
        affiliation, team, boardLocation, sessionID,
      });
    }
  };

  const displayBoard = () => {
    const board = [];
    for (let i = 0; i < 5; i += 1) {
      board.push(
        <TileRow
          handleTileClick={handleTileClick}
          rowNum={i}
          words={gameBoard.slice(i * 5, (i * 5) + 5)}
        />,
      );
    }
    return board;
  };

  return (
    <>
      <h2>This is the board</h2>
      <section className="game-board">
        {gameBoard && displayBoard()}
      </section>
    </>
  );
};

export default Board;
