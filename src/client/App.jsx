import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import Landing from './containers/Landing';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Provider>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
