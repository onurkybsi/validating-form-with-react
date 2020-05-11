import React, { Component } from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import DisplayValidation from "./DisplayValidation";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
    };
  }
  submitData = (newData) => {
    this.setState({ formData: newData });
  };
  render() {
    return (
      <div
        className="ui two column centered grid"
        style={{ marginTop: "30px" }}
      >
        <div className="ui raised very padded text container segment">
          <FormComponent submit={this.submitData} />
        </div>
        <div className="ui raised very padded text container segment">
          {/* <DisplayValidation data={this.state.formData} /> */}
        </div>
      </div>
    );
  }
}
