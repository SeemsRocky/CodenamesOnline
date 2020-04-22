import React from 'react';

const Message = ({ text, username }) => (
  <section className="message">
    {`${username}: ${text}`}
  </section>
);

export default Message;
