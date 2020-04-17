import React from 'react';

const ClueDisplay = ({ currentClue, guessesLeft }) => (
  <section>
    {currentClue}
    {guessesLeft}
  </section>
);

export default ClueDisplay;
