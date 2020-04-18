import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateClue } from '../actions/actions';

const SpymasterContainer = () => {
  const dispatch = useDispatch();
  const { currTeamTurn, currUser: { team } } = useSelector((store) => store.game);
  const { socket } = useSelector((store) => store.socket);

  // const [hasClueUpdated, setClueUpdate] = useState(false);
  const [currentClue, updateCurrentClue] = useState('');
  const [guessesLeft, updateGuesses] = useState(0);

  const handleClueSubmit = (e) => {
    e.preventDefault();
    // TODO
    // can only submit when its their teams turn and havent updated yet
    if (currTeamTurn === team) {
      dispatch(updateClue(currentClue, guessesLeft));
      socket.emit('clue updated', { currentClue, guessesLeft });
    }
  };

  const handleClueChange = (e) => {
    updateCurrentClue(e.target.value);
  };
  const handleGuessesLeftChange = (e) => {
    updateGuesses(e.target.value);
  };

  return (
    <section id="SpymasterContainer">
      This is the Spymaster Container
      <form onSubmit={handleClueSubmit}>
        <input
          type="text"
          placeholder="Enter New Clue"
          onChange={handleClueChange}
        />
        <input
          type="number"
          placeholder="Number of Words"
          onChange={handleGuessesLeftChange}
          min="0"
        />
        <input type="submit" value="submit" />
      </form>
    </section>
  );
};

export default SpymasterContainer;
