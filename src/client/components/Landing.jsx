import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchBar from '../containers/SearchBar';
import ArtistList from '../containers/ArtistList';
import AlbumList from '../containers/AlbumList';

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
