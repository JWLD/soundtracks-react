import React from 'react';
import { Link } from 'react-router-dom';

const ArtistTile = (props) => (
  <li>
    <Link
      to={`/artists/${props.spotify_id}`}
      key={props.id}
      className="results-sctn__tile"
      >{props.name}
    </Link>
  </li>
);

export default ArtistTile;
