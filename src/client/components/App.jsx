import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import {
  newMessage,
  updateTeams,
  selectTile,
  populateBoardSocket,
  updateClue,
  changeTurn,
  updateGuesses,
} from '../actions/actions';
import Dashboard from '../containers/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);

  if (socket) {
    socket.on('joined', (msg) => {
      dispatch(updateTeams(msg));
    });

    socket.on('new message', ({ username: user, text }) => {
      dispatch(newMessage({ user, text }));
    });

    socket.on('board populated', ({ newBoard }) => {
      dispatch(populateBoardSocket(newBoard));
    });

    socket.on('tile selected', ({ affiliation, boardLocation, team }) => {
      dispatch(selectTile(boardLocation));
    });
    socket.on('update clue', (({ currentClue, guessesLeft }) => {
      dispatch(updateClue(currentClue, guessesLeft));
    }));
    socket.on('update turn', ({ nextTeamTurn }) => {
      dispatch(changeTurn(nextTeamTurn));
    });
  }

  return (
    <>
      <Router>
        <Dashboard />
      </Router>
    </>
  );
};
export default App;
