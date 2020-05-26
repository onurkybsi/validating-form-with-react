import React, { Component } from "react";
import ValidateData from "./Validation";

export default class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      erroneous: [],
      valid: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let validationResult = ValidateData(nextProps.formData, nextProps.rules);

    if (prevState.valid === true && validationResult.valid === false) {
      nextProps.submit(false);
    }
    
    return {
      errors: validationResult.errors,
      erroneous: Object.keys(validationResult.errors),
      valid: validationResult.valid,
    };
  }

  handleClick = () => {
    this.props.submit(true);
  };

  render() {
    return (
      <button
        className="ui button"
        type="submit"
        disabled={!this.state.valid}
        onClick={this.handleClick}
        style={{ float: "right" }}
      >
        Submit
      </button>
    );
  }
}
