import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newSession, joinSession, updateStores } from '../actions/actions';

// const mapDispatchToProps = (dispatch) => ({
//   updateSessionID: (sessionID) => dispatch(makeNewSessionAction(sessionID)),
// });

const FormContainer = () => {
  const dispatch = useDispatch();
  const [roomNum, changeRoom] = useState('');
  const [username, changeUser] = useState('');

  // const readyToggle = () => {
  //   const socketConnect = (room) => io('localhost:3000', {
  //     query: `r_var=${room}`,
  //   });
  //   const socket = socketConnect(roomNum);
  //   socket.emit('ready', username);
  //   socket.on('ready changed', (msg) => console.log(msg));
  // };

  return (
    <section id="userlogin">
      Username:
      <input id="username" type="text" value={username} onChange={(e) => changeUser(e.target.value)} />
      Room ID:
      <input id="roomID" type="text" value={roomNum} onChange={(e) => changeRoom(e.target.value)} />
      <button
        id="joinbutton"
        type="button"
        onClick={() => {
          dispatch(joinSession(roomNum, username));
          dispatch(updateStores(roomNum));
        }}
      >
        Join
      </button>
      <button id="createbutton" type="button" onClick={() => dispatch(newSession(username))}>Create</button>
    </section>
  );
};

export default FormContainer;
