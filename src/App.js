import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import bubbly from 'bubbly-bg'
import Test from './Test'

class App extends Component {
  // componentDidMount() {
  //   window.bubbly({
  //         colorStart: "#fff4e6",
  //         colorStop: "#ffe9e4",
  //         blur: 1,
  //         compose: "source-over",
  //         bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
  //     });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test />
      </div>
    );
  }
}

export default App;
