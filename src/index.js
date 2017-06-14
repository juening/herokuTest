import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Weather from './components/weather';
import About from './components/about';

//load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!../src/styles/app.scss')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Weather} />
      <Route path='weather' component={Weather} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('root'))
