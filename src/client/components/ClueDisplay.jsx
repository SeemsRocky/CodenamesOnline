import React from 'react';

const ClueDisplay = ({ currentClue, guessesLeft }) => (
  <section>
    {
      currentClue
        ? <span>{`${currentClue} ${guessesLeft}`}</span>
        : <> </>
    }
  </section>
);

export default ClueDisplay;
