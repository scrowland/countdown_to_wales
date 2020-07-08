import React, { Component } from 'react';
import Countdown from './Countdown.js';
import './App.css';

class App extends Component {
  render() {
    const movingDateString = "2024-07-01T12:00:00";
    return (
      <div className="App">
        <div className="App-header">
          <h2>Leia and Si Move to Wales!</h2>  
        </div>
        <h3 className="title">Moving to Wales in ...</h3>
        <Countdown date={movingDateString} />
      </div>
    )
  }
}

export default App;
