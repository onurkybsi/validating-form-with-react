import React, { Component } from "react";
import FormValidator from "./FormValidator";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstname: "",
        lastname: "",
        birthdate: "",
        email: "",
        conditions: false,
      },
      validation: {},
    };
    this.rules = {
      firstname: { required: true, minLength: 3, onlyLetter: true },
      lastname: { required: true, minLength: 3, onlyLetter: true },
      email: { required: true, email: true },
      birthdate: { required: true, date: true },
    };
  }

  updateFormValues = (event) => {
    event.persist();
    this.setState((state) => ({
      data: { [event.target?.name]: event.target?.value },
    }));
  };

  updateConditions = (event) => {
    event.persist();
    this.setState((state) => ({
      data: { [event.target.name]: event.target.checked },
    }));
  };

  changeCallback = (validationResult) => {
    this.setState((state) => ({
      validation: validationResult,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <FormValidator
          formData={this.state.data}
          rules={this.rules}
          submit={this.props.submit}
          changeCallback={this.changeCallback}
        >
          <form className="ui form">
            <div className="field">
              <label style={{ float: "left" }}>First Name</label>
              <input
                type="text"
                name="firstname"
                value={this.state.data.firstname}
                onChange={this.updateFormValues}
                placeholder="First Name"
                style={{
                  borderColor:
                    this.state.validation.firstname?.length > 0 && "#912D2B",
                }}
              />
            </div>
            <div className="field">
              <label style={{ float: "left" }}>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={this.state.data.lastname}
                onChange={this.updateFormValues}
                placeholder="Last Name"
              />
            </div>
            <div className="field">
              <label style={{ float: "left" }}>Birth Date</label>
              <input
                type="text"
                name="birthdate"
                value={this.state.data.birthdate}
                onChange={this.updateFormValues}
                placeholder="Birth Date"
              />
            </div>
            <div className="field">
              <label style={{ float: "left" }}>E-mail</label>
              <input
                type="text"
                name="email"
                value={this.state.data.email}
                onChange={this.updateFormValues}
                placeholder="E-mail"
              />
            </div>
            <div className="ui checkbox" style={{ float: "left" }}>
              <input
                type="checkbox"
                name="conditions"
                value={this.state.data.conditions}
                onChange={this.updateConditions}
              />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </form>
        </FormValidator>
      </React.Fragment>
    );
  }
}
