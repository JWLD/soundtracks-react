import React from 'react';

const AlbumTile = (props) => (
  <a
    className="results-sctn__result-tile"
    key={props.id}
    style={props.tileStyle}
    href={props.link}
    target="_blank"
  ><div className="results-sctn__result-hover">{props.title}</div>
  </a>
);

export default AlbumTile;
