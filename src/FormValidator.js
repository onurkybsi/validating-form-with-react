import React, { Component } from "react";
import ValidateData from "./Validation";

export default class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillUpdate(nextProps, nextState) {
    let validation = ValidateData(nextProps.formData, nextProps.rules);
    
    nextProps.changeCallback(validation);
  }

  render() {
    return (
      <React.Fragment>
        <div onChange={this.handleChange}>{this.props.children}</div>
        <button
          className="ui button"
          type="submit"
          disabled={!this.state.formValid}
          style={{ float: "right" }}
        >
          Submit
        </button>
      </React.Fragment>
    );
  }
}
