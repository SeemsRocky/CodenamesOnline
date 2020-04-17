import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  newMessage, updateTeams, selectTile, populateBoardSocket, updateClue,
} from '../actions/actions';
import Dashboard from '../containers/Dashboard';

// const readyToggle = () => {
//   const Connect = (room) => io('localhost:3000', {
//     query: `r_var=${room}`,
//   });
//   const  = Connect(roomNum);
//   .emit('ready', username);
//   .on('ready changed', (msg) => console.log(msg));
// };

const App = () => {
  const dispatch = useDispatch();
  const { socket } = useSelector((store) => store.socket);
  // socket.emit('join session', username);
  if (socket) {
    socket.on('joined', (msg) => {
      dispatch(updateTeams(msg));
    });

    socket.on('new message', ({ username: user, text }) => {
      console.log(`${user}: ${text}`);
      dispatch(newMessage({ user, text }));
    });

    socket.on('board populated', ({ newBoard }) => {
      console.log('board populated listener for socket');
      dispatch(populateBoardSocket(newBoard));
    });

    socket.on('tile selected', ({ affiliation, boardLocation }) => {
      dispatch(selectTile(boardLocation));
    });
    socket.on('update clue', (({ currentClue, guessesLeft }) => {
      dispatch(updateClue(currentClue, guessesLeft));
    }));
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
