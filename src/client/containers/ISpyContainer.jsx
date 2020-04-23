import React from 'react';
import { useSelector } from 'react-redux';
import GameContainer from './GameContainer';
import SpymasterContainer from './SpymasterContainer';
import GameHeader from '../components/GameHeader';

const ISpyContainer = () => {
  const { currUser: { isSpyMaster } } = useSelector((store) => store.game);
  return (
    <>
      <GameHeader />
      <GameContainer />
      {
        isSpyMaster
          ? <SpymasterContainer />
          : <> </>
      }
    </>
  );
};

export default ISpyContainer;
