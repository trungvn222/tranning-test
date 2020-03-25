import React, { Component } from "react";
import PropTypes from "prop-types";

class GuessedWords extends Component {
  render() {
    const { guessedWords } = this.props;
    let contents = null;
    if (guessedWords.length === 0) {
      contents = (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      );
    }
    return <div data-test="component-guessed-word">{contents}</div>;
  }
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
