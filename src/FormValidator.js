import React, { Component } from "react";
import ValidateData from "./Validation";

export default class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        firstname: "",
        lastname: "",
        birthdate: "",
        email: "",
        conditions: false,
      },
    };
  }

  handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "conditions") {
      this.setState((state) => ({
        data: { [event.target.name]: event.target.checked },
      }));
    } else {
      this.setState((state) => ({
        data: { [event.target.name]: event.target.value },
      }));
    }

    let validation = ValidateData(this.state.formData, this.props.rules);
    this.props.changeCallback(validation);
  };

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
