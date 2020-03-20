import React, { Component } from "react";
import PropTypes from "prop-types";

class Congrats extends Component {
  render() {
    const { success = false } = this.props;
    if (success) {
      return (
        <div data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      );
    }
    return <div data-test="component-congrats"></div>;
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
