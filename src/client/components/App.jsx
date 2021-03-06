import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  newMessage,
  joinLobby,
  selectTile,
  populateBoardSocket,
  updateClue,
  changeTurn,
  changeTeams,
  startGame,
} from '../actions/actions';

import Dashboard from '../containers/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);

  if (socket) {
    socket.on('joined', (userObj) => {
      dispatch(joinLobby(userObj));
    });
    socket.on('changed team', (userObj) => {
      dispatch(changeTeams(userObj));
    });
    socket.on('initiated game', (ready) => {
      dispatch(startGame(ready));
    });
    socket.on('new message', ({ username: user, text }) => {
      dispatch(newMessage({ user, text }));
    });

    socket.on('board populated', ({ newBoard }) => {
      dispatch(populateBoardSocket(newBoard));
    });

    socket.on('tile selected', ({ boardLocation }) => {
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
