import React from 'react';
import { useSelector } from 'react-redux';
import Board from '../components/Board';
import ChatboxContainer from './ChatboxContainer';
import ClueDisplay from '../components/ClueDisplay';

const GameContainer = () => {
  const { sessionID } = useSelector((store) => store.game);
  const { guessesLeft, currentClue } = useSelector((store) => store.clue);
  return (
    <section className="game-container">
      <h2>
        {`Welcome to iSpy! Session: ${sessionID || 'TBD'}`}
      </h2>
      <ClueDisplay guessesLeft={guessesLeft} currentClue={currentClue} />
      <section id="GameChatContainer">
        <Board />
        <ChatboxContainer />
      </section>
    </section>
  );
};


export default GameContainer;
