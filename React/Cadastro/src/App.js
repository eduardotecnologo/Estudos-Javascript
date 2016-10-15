import React, { Component } from 'react';
import './App.css';

import HomeC from './modules/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeC></HomeC>
      </div>
    );
  }
}

export default App;
