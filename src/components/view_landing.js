import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import '../assets/style/landing.css';

class LandingView extends Component {
  render() {
    return (
      <header className="page-hdr">
        <SearchBar />
      </header>
    );
  }
};

export default LandingView;
