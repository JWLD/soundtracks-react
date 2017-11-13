import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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
          <Link
            to={`/artists/${result.discogs_id}`}
            key={result.id}
            className="results-sctn__result-tile"
            onClick={() => this.props.getAlbumsByArtist(result.discogs_id)}
          >
            {result.name}
          </Link>
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
      dispatch(setResults(response.data));
    });
  },

  getAlbumsByArtist: (id) => {
    Axios.get(`http://localhost:9000/albums?q=${id}`).then((response) => {
      dispatch(setResults(response.data));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResultsList));
