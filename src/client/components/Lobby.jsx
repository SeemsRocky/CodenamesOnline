import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SelectDropdown from './SelectDropdown';
import SpymasterModal from './SpymasterModal';
import ListContainer from '../containers/ListContainer';
import Loading from './Loading';

const Lobby = () => {
  const {
    socket: { socket }, game: {
      currUser, sessionID, blueTeam, redTeam,
    },
  } = useSelector((store) => store);
  const [isModalVisible, updateModalVisible] = useState(false);


  const handleTeamChange = (e) => {
    e.preventDefault();
    const { team, username } = currUser;
    const changeToTeam = team === 'blue' ? 'red' : 'blue';
    const spymaster = changeToTeam === 'blue' ? !blueTeam.length : !redTeam.length;
    socket.emit('team change', {
      username, sessionID, changeToTeam, prevTeam: `${team}Team`, spymaster,
    });
  };

  const handleModal = () => {
    updateModalVisible(!isModalVisible);
  };

  const startGame = () => {
    socket.emit('game initiate');
  };

  // if (!sessionID) {
  //   return (<Loading />);
  // }
  return (
    <section id="Lobby">
      {sessionID}
      <ListContainer handleTeamChange={handleTeamChange} />
      <SpymasterModal startGame={startGame} show={isModalVisible} handleClose={handleModal}>
        <SelectDropdown title="blue team" options={blueTeam} />
        <SelectDropdown title="red team" options={redTeam} />
      </SpymasterModal>
      <button type="submit" onClick={handleModal}> Ready </button>
    </section>
  );
};

export default Lobby;
