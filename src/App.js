import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">the counter is currently</h1>
        <button data-test="increment-button">increment</button>
      </div>
    );
  }
}

export default App;
