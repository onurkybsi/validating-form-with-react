import React, { Component } from "react";
import ValidateData from "./Validation";

export default class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      formValid: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let validation = ValidateData(nextProps.data, nextProps.rules);

    nextProps.changeCallback(validation);
    return {
      errors: validation,
      formValid: validation.valid,
    };
  }

  render() {
    return (
      <button
        className="ui button"
        type="submit"
        disabled={!this.state.formValid}
        style={{ float: "right" }}
      >
        Submit
      </button>
    );
  }
}

