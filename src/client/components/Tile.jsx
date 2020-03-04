import React from 'react';

const Tile = (props) => {
  const {
    word, affiliation, handleTileClick, boardLocation, selected, socket, sessionID,
  } = props;

  return (
    <article className="tile">
      <button
        className={selected ? `${affiliation}-tile-button` : 'unselected-tile-button'}
        onClick={() => { handleTileClick(socket, sessionID, affiliation, boardLocation); }}
        type="button"
      >
        {word}
      </button>
    </article>
  );
};

export default Tile;
