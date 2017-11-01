import React, { Component } from 'react';
import Axios from 'axios';

import SearchBar from '../components/search_bar';
import ResultsList from '../components/results_list';

class LandingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      category: ''
    };

    this.searchArtists = this.searchArtists.bind(this);
    this.getAlbums = this.getAlbums.bind(this);
    this.clearResults = this.clearResults.bind(this);
  };

  componentDidMount() {
    this.searchArtists('');
  }

  searchArtists(term) {
    const request = Axios.get(`/api/artists?q=${term}`);

    request.catch((error) => {
      console.log(error);
    });

    request.then((response) => {
      this.setState({
        results: response.data,
        category: 'artists'
      });
    });
  };

  getAlbums(artist) {
    const request = Axios.get(`/api/albums?q=${artist.discogs_id}`);

    request.catch((error) => {
      console.log(error);
    });

    request.then((response) => {
      console.log(response.data);
      this.setState({
        results: response.data,
        category: 'albums'
      });
    });
  };

  clearResults() {
    this.setState({
      results: []
    });
  };

  render() {
    return (
      <div>
        <header className="page-hdr">
          <SearchBar onSearchTermChange={this.searchArtists} clearResults={this.clearResults}/>
        </header>
        <section className="results-sctn">
          <ResultsList results={this.state.results} getAlbums={this.getAlbums} category={this.state.category}/>
        </section>
      </div>
    );
  };
};

export default LandingView;
