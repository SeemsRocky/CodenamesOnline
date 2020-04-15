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
  const clueState = useSelector((store) => store.clue);
  const [clue, updateClue] = useState('');
  const [numGuesses, updateNum] = useState(0);
  useEffect(() => {
    console.log(clueState);
  }, []);
  const handleClueSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentClue(clue, numGuesses));
  };

  const handleClueChange = (e) => {
    updateClue(e.target.value);
  };
  const handleNumGuessesChange = (e) => {
    updateNum(e.target.value);
  };

  return (
    <section>
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
          onChange={handleNumGuessesChange}
          min="0"
        />
        <input type="submit" value="submit" />
      </form>
    </section>
  );
};

export default SpymasterContainer;
