import React from 'react';
// would be a straight down array of names and it would Display names/words?
const List = ({ list, color, type }) => {
  const listWords = list.map((cv) => (<div key={`${cv.username}`}>{cv.username}</div>));

  const label = `${color}  ${type}`;
  return (
    <section>
      <div id={label}>
        {label}
      </div>
      <div id={`${label} words`}>
        {listWords}
      </div>
    </section>
  );
};

export default List;
