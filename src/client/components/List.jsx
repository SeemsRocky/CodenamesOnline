import React from 'react';

const List = ({ list, color }) => (
  <section>
    <div id="Team-Header">
      {`${color} Team`}
    </div>
    <div id="Players-List">
      {list.map(({ username, userID }) => (
        <div key={`${userID}-${username}`} className={`${color}-Player`}>{username}</div>
      ))}
    </div>
  </section>
);

export default List;
