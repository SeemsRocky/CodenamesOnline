import React from 'react';
import { useSelector } from 'react-redux';
import GameContainer from './GameContainer';
import SpymasterContainer from './SpymasterContainer';

const iSpyContainer = () => {
  const { currUser: { isSpyMaster } } = useSelector((store) => store.game);
  return (
    <>
      <GameContainer />
      {
        isSpyMaster
          ? <SpymasterContainer />
          : <> </>
      }
    </>
  );
};

export default iSpyContainer;
