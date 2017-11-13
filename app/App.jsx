import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import SearchBar from './components/SearchBar';
import ArtistList from './components/ArtistList';
import AlbumList from './components/AlbumList';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <SearchBar />
        <section className="results-sctn">
          <Switch>
            <Route exact path="/" component={ArtistList} />
            <Route path="/artists/:id" component={AlbumList} />
          </Switch>
        </section>
      </div>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
