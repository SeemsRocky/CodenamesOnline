import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

const Chatbox = () => {
  const { messages, currUser: { username } } = useSelector((store) => store.game);
  const { socket } = useSelector((store) => store.socket);
  const [msg, setText] = useState('');

  const handleKeyPress = (event) => {
    if (event.which === 13 && msg.length > 0) {
      console.log('EMITTING MESSAGE');
      socket.emit('message', { msg, username });
      setText('');
      event.target.focus();
    }
  };

  return (
    <section className="chatbox-container">
      <div id="messageContainer">
        {messages.map(({ user, text }) => <Message key={user.concat((new Date().getTime().toString()))} text={text} username={user} />)}
      </div>
      <input id="userInput" onKeyPress={handleKeyPress} value={msg} onChange={(e) => setText(e.target.value)} />
    </section>
  );
};

export default Chatbox;
