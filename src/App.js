import React from "react";
import "./App.css";

import GuessdWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessdWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
