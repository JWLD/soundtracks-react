import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import AlbumTile from '../../components/main/AlbumTile';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      artist: ''
    };
  }

  componentDidMount() {
    Axios.get(`/api/db-albums?q=${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          albums: response.data.albums,
          artist: response.data.artist
        });
      })
      .catch((err) => {
				return console.log(err.response.data || err);
      });
  }

  render() {
    const albumList = this.state.albums
      .filter(album => {
        return album.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0
      }).map(album => {
        const albumTitle = encodeURIComponent(album.title);

        const link = album.spotify_img ?
          `https://open.spotify.com/album/${album.spotify_id}` :
          `https://www.youtube.com/results?search_query=${this.state.artist}+${albumTitle}`;

        const tileStyle = { backgroundImage: `url(${album.spotify_img})` };

        return <AlbumTile key={album.id} link={link} tileStyle={tileStyle} {...album} />;
      });

    return (
      <ul>{albumList}</ul>
    )
  }
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(AlbumList);
