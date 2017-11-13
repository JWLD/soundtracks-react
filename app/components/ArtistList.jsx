import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { setArtists } from '../redux/actions';

class ArtistList extends Component {
  componentDidMount() {
    this.props.getAllArtists();
  }

  render() {
    const artistList = this.props.artists
      .filter(artist => {
        return artist.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0
      }).map(artist => (
        <Link
          to={`/artists/${artist.discogs_id}`}
          key={artist.id}
          className="results-sctn__result-tile"
        >
          {artist.name}
        </Link>
      )
    );

    return (
      <ul>{artistList}</ul>
    )
  }
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  artists: state.artists
});

const mapDispatchToProps = (dispatch) => ({
  getAllArtists: () => {
    Axios.get('http://localhost:9000/artists').then((response) => {
      dispatch(setArtists(response.data));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
