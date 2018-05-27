import React, { Component } from 'react';

class Test extends Component {

  componentDidMount() {
    window.bubbly({
      colorStart: "#fff4e6",
      colorStop: "#ffe9e4",
      blur: 1,
      compose: "source-over",
      bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`,
      canvas: document.querySelector("#background")
  	});
  }

  render() {
    return (
      <canvas id="background" className="App">
       <p>test</p>
      </canvas>
    );
  }
}

export default Test;