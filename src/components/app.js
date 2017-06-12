import React, { Component } from 'react';
import Header from './header';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>


      </div>
    );
  }
}

export default App;
