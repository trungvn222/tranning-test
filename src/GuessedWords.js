import React, { Component } from "react";
import PropTypes from "prop-types";

class GuessedWords extends Component {
	render() {
		return <div></div>;
	}
}

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		}),
	).isRequired,
};

export default GuessedWords;
