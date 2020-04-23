import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newSession, joinSession, updateStores } from '../actions/actions';

const FormContainer = () => {
  const dispatch = useDispatch();
  const { sessionID } = useSelector((store) => store.game);
  const [roomNum, changeRoom] = useState('');
  const [username, changeUser] = useState('');

  const joinCurrentSession = () => {
    dispatch(joinSession(roomNum, username));
    dispatch(updateStores(roomNum));
  };
  const startNewSession = () => {
    dispatch(newSession(username));
  };
  return (
    <section id="userlogin">
      Username:
      <input id="username" type="text" value={username} onChange={(e) => changeUser(e.target.value)} />
      Room ID:
      <input id="roomID" type="text" value={roomNum} onChange={(e) => changeRoom(e.target.value)} />
      <button type="button" onClick={joinCurrentSession}> Join</button>
      <button type="button" onClick={startNewSession}>Create</button>
    </section>
  );
};

export default FormContainer;
