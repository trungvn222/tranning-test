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
    } else {
      const guessedWordsRows = this.props.guessedWords.map((word, index) => {
        return (
          <tr key={word} data-test="guessed-word">
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
          </tr>
        );
      });
      contents = (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
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
