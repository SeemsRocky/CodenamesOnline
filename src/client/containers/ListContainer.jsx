import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List';

const ListContainer = ({ handleTeamChange }) => {
  const { blueTeam, redTeam } = useSelector((store) => store.game);
  return (
    <section id="teamList">
      <List list={blueTeam} type="team" color="blue" />
      <button type="submit" onClick={handleTeamChange}> Change Teams </button>
      <List list={redTeam} type="team" color="red" />
    </section>
  );
};

export default ListContainer;
