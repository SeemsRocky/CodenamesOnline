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
      if (affiliation !== currTeamTurn || guessesLeft === 1) {
        const nextTeam = team === 'blue' ? 'red' : 'blue';
        socket.emit('change turn', { nextTeamTurn: nextTeam });
      }
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
          key={`Tilerow-${i}`}
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
      <section className="game-board">
        {gameBoard && displayBoard()}
      </section>
    </>
  );
};

export default Board;
