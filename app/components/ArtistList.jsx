import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ArtistList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:9000/artists').then((response) => {
      this.setState({ artists: response.data });
    });
  }

  render() {
    const artistList = this.state.artists
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
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(ArtistList);
