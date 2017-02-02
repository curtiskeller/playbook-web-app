import React, { Component } from 'react';
import TopNav from './TopNav.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="top-nav">
            <TopNav/>
          </div>
          <div className="body-content container">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;

