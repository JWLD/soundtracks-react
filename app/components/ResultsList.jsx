import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setResults } from '../redux/actions';

class ResultsList extends Component {
  componentDidMount() {
    this.props.getAllArtists();
  }

  render() {
    return (
      <ul>
        {this.props.results
          .filter(result => result.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0)
          .map(result => (
            <button
              key={result.id}
              className="results-sctn__result-tile"
              // onClick={() => this.props.getAlbumsByArtist(result.discogs_id)}
            >{result.name}</button>))}
      </ul>
    )
  }
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
