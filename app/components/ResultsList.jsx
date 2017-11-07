import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setResults } from '../redux/actions';

class ResultsList extends Component {
  componentDidMount() {
    this.props.getAllArtists();
  }

  render() {
    let resultsList;

    if (this.props.resultType === 'artist') {
      resultsList = this.props.results
        .filter(result => result.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0)
        .map(result => (
          <button
            key={result.id}
            className="results-sctn__result-tile"
            onClick={() => this.props.getAlbumsByArtist(result.discogs_id)}
          >
            {result.name}
          </button>
        ));
    } else {
      resultsList = this.props.results.map(result => {
        const tileStyle = { backgroundImage: `url(${result.spotify_img})` };

        return (
          <button
            className="results-sctn__result-tile"
            key={result.id}
            style={tileStyle}
            >
              <div className="results-sctn__result-hover">{result.title}</div>
            </button>
        );
      });
    }

    return (
      <ul>{resultsList}</ul>
    )
  }
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  resultType: state.resultType,
  results: state.results
});

const mapDispatchToProps = (dispatch) => ({
  getAllArtists: () => {
    Axios.get('http://localhost:9000/artists').then((response) => {
      dispatch(setResults({ type: 'artist', data: response.data }));
    });
  },

  getAlbumsByArtist: (id) => {
    Axios.get(`http://localhost:9000/albums?q=${id}`).then((response) => {
      dispatch(setResults({ type: 'album', data: response.data }));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
