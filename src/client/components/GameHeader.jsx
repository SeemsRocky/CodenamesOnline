import React from 'react';
import { useSelector } from 'react-redux';
import ClueDisplay from './ClueDisplay';

const GameHeader = () => {
  const {
    guessesLeft,
    currentClue,
    redWordsLeft,
    blueWordsLeft,
    currTeamTurn,
    sessionID,
  } = useSelector((store) => store.game);
  return (
    <section>
      <h2>
        {`Welcome to iSpy! Session: ${sessionID || 'TBD'}`}
      </h2>
      <p>
        <span>{blueWordsLeft}</span>
        <span>{redWordsLeft}</span>
      </p>
      <ClueDisplay guessesLeft={guessesLeft} currentClue={currentClue} />
      <p>
        {`${currTeamTurn} team's turn`}
      </p>
    </section>
  );
};

export default GameHeader;
