import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import ArtistList from './ArtistList';
import AlbumList from './AlbumList';

const Landing = () => (
  <div>
    <SearchBar />
    <section className="results-sctn">
      <Route exact path="/" component={ArtistList} />
      <Route path="/artists/:id" component={AlbumList} />
    </section>
  </div>
);

export default Landing;
