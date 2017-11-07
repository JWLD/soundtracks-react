import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const Landing = () => (
  <div>
    <header className="page-hdr">
      <SearchBar />
    </header>

    <section className="results-sctn">
      <ResultsList />
    </section>
  </div>
);

export default Landing;
