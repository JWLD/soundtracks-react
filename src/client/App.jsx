import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import LandingPage from './components/main/LandingPage';
import DataEntryPage from './components/data/DataEntryPage';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
				<Route path="/add" component={DataEntryPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
