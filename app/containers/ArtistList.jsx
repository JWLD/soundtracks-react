import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import ArtistTile from '../components/ArtistTile';

class ArtistList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:9000/artists')
      .then((response) => {
        if (response.data.error) return console.log(response.data.error.message);

        this.setState({ artists: response.data });
      })
      .catch((err) => {
        return console.log(err);
      });
  }

  render() {
    const artistList = this.state.artists
      .filter(artist => {
        return artist.name.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) >= 0
      }).map(artist => {
        return <ArtistTile key={artist.id} {...artist} />;
      });

    return (
      <ul>{artistList}</ul>
    )
  }
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(ArtistList);
