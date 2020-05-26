import React, { Component } from "react";
import ValidateData from "./Validation";

export default class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validation: {},
      erroneous: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    let validationResult = ValidateData(props.formData, props.rules);

    if (state.validation.valid === true && validationResult.valid === false) {
      props.submit(null, false);
    }

    return {
      validation: validationResult,
      erroneous: Object.keys(validationResult),
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
        disabled={!this.state.validation.valid}
        onClick={this.handleClick}
        style={{ float: "right" }}
      >
        Submit
      </button>
    );
  }
}
