import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">the counter is currently {counter}</h1>
        <button onClick={this.handleIncrement} data-test="increment-button">
          increment
        </button>
      </div>
    );
  }
}

export default App;
