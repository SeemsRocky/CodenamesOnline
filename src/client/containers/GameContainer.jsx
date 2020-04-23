import React from 'react';
import Board from '../components/Board';
import Chatbox from '../components/Chatbox';

const GameContainer = () => (
  <section className="game-container">
    <section id="GameChatContainer">
      <Board />
      <Chatbox />
    </section>
  </section>
);


export default GameContainer;
