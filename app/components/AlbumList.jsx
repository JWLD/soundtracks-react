import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import SearchBar from './SearchBar';
import { setAlbums } from '../redux/actions';

class AlbumList extends Component {
  componentWillMount() {
    this.props.getAlbumsByArtist(this.props.match.params.id);
  }

  render() {
    const albumList = this.props.albums
      .filter(album => {
        return album.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0
      }).map(album => {
        const tileStyle = { backgroundImage: `url(${album.spotify_img})` };

        return (
          <button
            className="results-sctn__result-tile"
            key={album.id}
            style={tileStyle}>
            <div className="results-sctn__result-hover">{album.title}</div>
          </button>
        );
      }
    );

    return (
      <ul>{albumList}</ul>
    );
  }
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  albums: state.albums
});

const mapDispatchToProps = (dispatch) => ({
  getAlbumsByArtist: (id) => {
    dispatch(setAlbums([])); // clear albums before loading

    Axios.get(`http://localhost:9000/albums?q=${id}`).then((response) => {
      dispatch(setAlbums(response.data));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
