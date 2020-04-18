import React from 'react';

const ClueDisplay = ({ currentClue, guessesLeft }) => {
  const chooseClueDisplay = () => {
    let guesses = 0;
    if (currentClue) {
      guesses = guessesLeft === -1 ? 0 : guessesLeft;
    }
    return (
      <span>{`${currentClue} ${guesses}`}</span>
    );
  };

  return (
    <section>
      {
      currentClue
        ? chooseClueDisplay()
        : <> </>
      }
    </section>
  );
};

export default ClueDisplay;
