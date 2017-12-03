import React from 'react';

const AlbumTile = (props) => (
  <li>
    <a
      className="results-sctn__tile"
      key={props.id}
      style={props.tileStyle}
      href={props.link}
      target="_blank"
      ><div className="results-sctn__tile-overlay">{props.title}</div>
    </a>
  </li>
);

export default AlbumTile;
