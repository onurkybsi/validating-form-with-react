import React, { Component } from "react";
import ValidateData from "./Validation";

export default class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      valid: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let validationResult = ValidateData(nextProps.formData, nextProps.rules);

    if (prevState.valid === true && validationResult.valid === false) {
      nextProps.submit(false);
    }

    let erroneous = [];

    for (let [key, value] of Object.entries(validationResult.errors)) {
      if (value.length > 0) {
        erroneous.push(key);
      }
    }

    nextProps.changeCallback(erroneous);

    return {
      errors: validationResult.errors,
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
