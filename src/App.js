import React, { Component } from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import DisplayValidation from "./DisplayValidation";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
    };
  }
  submitForm = (e, isValid) => {
    this.setState({ formValid: true && isValid });
  };
  render() {
    console.log("hello from the app");
    return (
      <div className="ui two row centered grid">
        <div
          style={{ marginTop: "50px" }}
          className="ui raised very padded text container segment"
        >
          <FormComponent submit={this.submitForm} />
        </div>
        <div className="row">
          <DisplayValidation formValid={this.state.formValid} />
        </div>
      </div>
    );
  }
}
