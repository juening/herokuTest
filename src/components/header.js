import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">React Weather</IndexLink>
          </div>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="weather">Weather</Link></li>
            <li><Link to="About">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
