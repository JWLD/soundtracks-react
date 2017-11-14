import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
const Querystring = require('querystring');

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/albums?q=${this.props.match.params.id}`).then((response) => {
      this.setState({ albums: response.data });
    });
  }

  render() {
    const albumList = this.state.albums
      .filter(album => {
        return album.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0 && album.spotify_img
      }).map(album => {
        const albumTitle = encodeURIComponent(album.title);

        const link = album.spotify_img ?
          `https://open.spotify.com/album/${album.spotify_id}` :
          `https://www.youtube.com/results?search_query=hans+zimmer+${albumTitle}`;

        const tileStyle = { backgroundImage: `url(${album.spotify_img})` };

        return (
          <a
            className="results-sctn__result-tile"
            key={album.id}
            style={tileStyle}
            href={link}
            target="_blank"
          ><div className="results-sctn__result-hover">{album.title}</div>
          </a>
        );
      }
    );

    return (
      <ul>{albumList}</ul>
    );
  }
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(AlbumList);
