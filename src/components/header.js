import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    e.preventDefault();
    alert('Not set yet');
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text" >React Weather App</li>
            <li>
              <IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">React Weather</IndexLink>
            </li>
            <li>
              <Link to="weather">Weather</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;


// var old = (
//   <nav className="navbar navbar-default">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <IndexLink className="navbar-brand" to="/">React Weather</IndexLink>
//       </div>
//       <ul className="nav navbar-nav">
//         <li><IndexLink to="/">Home</IndexLink></li>
//         <li><Link to="weather">Weather</Link></li>
//         <li><Link to="About">About</Link></li>
//       </ul>
//     </div>
//   </nav>
// );
