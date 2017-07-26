import React, { Component } from 'react';
import Axios from 'axios';

export default class ResultsList extends Component {
  constructor(props) {
    super(props);
  };

  renderResults() {
    if (this.props.category === 'artists') {
      return this.renderArtists();
    } else {
      return this.renderAlbums();
    }
  };

  renderArtists() {
    console.log(this.props.results);
    if (this.props.results) {
      return this.props.results.map((result) => {
        return (
          <button
            className="results-sctn__artist-btn"
            key={result.id}
            onClick={() => this.props.getAlbums(result)}
          >{result.name}</button>
        );
      });
    }
  };

  renderAlbums() {
    return this.props.results.map((result) => {
      const tileStyle = result.spotify_img
        ? { backgroundImage: `url(${result.spotify_img})` }
        : { backgroundImage: `url(../app/assets/artwork/${result.discogs_id}.png)` }

      return (
        <button
          className="results-sctn__artist-btn"
          key={result.id}
          onClick={() => this.playAlbum(result)}
          style={tileStyle}
        >
          <div className="results-sctn__artist-hover">{result.title}</div>
        </button>
      );
    });
  };

  playAlbum(album) {
    console.log(album);
  };

  render() {
    return (
      <ul>
        {this.renderResults()}
      </ul>
    )
  };
};
