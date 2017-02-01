import React, { Component } from 'react';
import TopNav from './TopNav.jsx';
import PlaybookLibrary from '../home/PlaybookLibrary.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="top-nav">
            <TopNav/>
          </div>
          <div className="body-content container">
              <PlaybookLibrary/>
          </div>
      </div>
    );
  }
}

export default App;

