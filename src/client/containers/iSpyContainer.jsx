import React from 'react';
import { useSelector } from 'react-redux';
import GameContainer from './GameContainer';
import ListContainer from './ListContainer';
import SpymasterContainer from './SpymasterContainer';
// import { newMessage } from '../actions/actions';

const iSpyContainer = () => {
  const { currUser: { username } } = useSelector((store) => store.game);
  return (
    <>
      <GameContainer />
      <ListContainer />
      <SpymasterContainer />
    </>
  );
};

export default iSpyContainer;
