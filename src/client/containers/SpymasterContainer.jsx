import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentClue } from '../actions/actions';

// const mapStateToProps = (state) =>
// console.log('in map state to props, ', state);
// ({
//   sessionID: state.game.sessionID,
//   socket: state.socket.socket,
// });
// populateBoard: (sessionID) => dispatch(populateBoard(sessionID)),
// setCurrentClue: (text, num) => dispatch(setCurrentClue(text, num)),
const SpymasterContainer = () => {
  const dispatch = useDispatch();
  const { currTeamTurn, currUser: { team } } = useSelector((store) => store.game);
  const { socket } = useSelector((store) => store.socket);

  const [hasClueChanged, updateHasClueChanged] = useState(false);
  const [currentClue, updateClue] = useState('');
  const [guessesLeft, updateGuesses] = useState(0);

  const handleClueSubmit = (e) => {
    e.preventDefault();
    updateHasClueChanged(true);
    dispatch(setCurrentClue(currentClue, guessesLeft));
    socket.emit('clue updated', { currentClue, guessesLeft });
  };

  const handleClueChange = (e) => {
    updateClue(e.target.value);
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
        {/* disable after clueUpdate and not team */}
        <input type="submit" value="submit" disabled={hasClueChanged && team !== currTeamTurn} />
      </form>
    </section>
  );
};

export default SpymasterContainer;
