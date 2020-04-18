import React from 'react';

const Tile = ({
  word,
  affiliation,
  handleTileClick,
  boardLocation,
  selected,
}) => (
  <article className="tile">
    <button
      className={selected ? `${affiliation}-tile-button` : 'unselected-tile-button'}
      onClick={() => { handleTileClick(affiliation, boardLocation); }}
      type="button"
    >
      {word}
    </button>
  </article>
);

export default Tile;
