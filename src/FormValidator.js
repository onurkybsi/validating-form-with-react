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

  static getDerivedStateFromProps(props, state) {
    let validation = ValidateData(props.data, props.rules);

    return {
      error: validation,
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
