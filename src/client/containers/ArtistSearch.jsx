import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { setArtist } from '../redux/actions';

class ArtistSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      artists: [],
      selectedArtist: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.clickOnArtist = this.clickOnArtist.bind(this);
  }

  onInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onKeyDown(e) {
    if (e.keyCode === 13) { // enter key
      e.preventDefault();

      Axios.get(`/api/sp-artists?q=${this.state.searchTerm}`)
        .then((response) => {
          this.setState({ artists: response.data.artists.items });
        })
        .catch((err) => {
          return console.log(err);
        });
    }
  }

  clickOnArtist(artist) {
    this.props.selectArtist(artist.id); // update redux

    // attempt to add artist to DB
    const imageUrl = artist.images[1] ? artist.images[1].url : null;

    Axios.post('/api/db-artists', { id: artist.id, name: artist.name, img: imageUrl })
      .then((response) => {
        return console.log(response.data);
      })
      .catch((err) => {
        return err.response ? console.log(err.response.data) : console.log(err);
      });
  }

  render() {
    let artists = [];

    // create 3 artist panels depending on state
    for (var i = 0; i < 3; i++) {
      const artist = this.state.artists[i];

      if (artist) {
        const url = artist.images[1] ? artist.images[1].url : null;
        const boxClass = artist.id === this.props.artist ? 'artist-sctn__box selected' : 'artist-sctn__box';
        const photoStyle = { backgroundImage: `url(${url})` };
        const name = artist.name.slice(0, 25);

        artists[i] = (
          <button className={boxClass} key={i} onClick={() => this.clickOnArtist(artist)}>
            <div style={photoStyle}></div>
            <span>{name}</span>
          </button>
        );
      } else {
        artists[i] = (
          <button className="artist-sctn__box" key={i}>
            <div></div>
            <span>~</span>
          </button>
        );
      }
    }

    return (
      <section className="artist-sctn">
        <input
          onKeyDown={this.onKeyDown}
          onChange={this.onInputChange}
          value={this.state.searchTerm}
          placeholder="Search"
          autoComplete="off"
        />

        <div className="artist-sctn__box-wrap">
          {artists}
        </div>
      </section>
    );
  };
};

const mapStateToProps = (state) => ({
  artist: state.artist
});

const mapDispatchToProps = (dispatch) => ({
  selectArtist: (id) => {
    dispatch(setArtist(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearch);
