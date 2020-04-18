import React from 'react';
import Tile from './Tile';

const TileRow = ({ handleTileClick, rowNum, words }) => (
  <section className="game-row" id={`row-${rowNum + 1}`}>
    {
      words.map(
        ({
          id,
          selected,
          word,
          affiliation,
        }, index) => (
          <Tile
            key={`word-tile-${index + (5 * rowNum)}`}
            selected={selected}
            boardLocation={index + (5 * rowNum)}
            wordId={id}
            word={word}
            affiliation={affiliation}
            handleTileClick={handleTileClick}
          />
        ),
      )
    }
  </section>
);

export default TileRow;
