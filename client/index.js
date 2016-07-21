import App from './components/App';
import Home from './components/Home';
import Pokemon from './components/pokemon';
import Register from './components/register';
import Login from './components/login';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="pokemon" component={Pokemon} />
      <Route path="register" component={Register} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
  , document.getElementById('root'));
