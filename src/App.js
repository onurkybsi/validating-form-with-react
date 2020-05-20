import React, { Component } from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import DisplayValidation from "./DisplayValidation";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
      formValid: false,
    };
  }
  submitData = (newData) => {
    this.setState({ formData: newData, formValid: true });
  };
  render() {
    return (
      <div className="ui two row centered grid">
        <div
          style={{ marginTop: "50px" }}
          className="ui raised very padded text container segment"
        >
          <FormComponent submit={this.submitData} />
        </div>
        <div className="row">
          <DisplayValidation formValid={this.state.formValid} />
        </div>
      </div>
    );
  }
}
