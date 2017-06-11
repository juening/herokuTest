import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Weather from './components/weather';


//load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='weather' component={Weather} />
    </Route>
  </Router>,
  document.getElementById('root'))
