import React, { Component } from "react";
import ValidateData from "./Validation";

export default class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      formValid: false,
    };
    this.rules = {
      firstname: { required: true, minLength: 3, onlyLetter: true },
      lastname: { required: true, minLength: 3, onlyLetter: true },
      email: { required: true, email: true },
      birthdate: { required: true, date: true },
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      error: ValidateData(props.data, props.rules)
    }
  };

  render() {
    return (
      <button className="ui button" type="submit" disabled={this.state.formValid} style={{ float: "right" }}>
        Submit
      </button>
    );
  }
}
