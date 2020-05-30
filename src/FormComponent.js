import React, { Component } from "react";
import FormValidator from "./FormValidator";

export default class FormComponent extends Component {
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
    this.rules = {
      firstname: { required: true, minLength: 3, onlyLetter: true },
      lastname: { required: true, minLength: 3, onlyLetter: true },
      email: { required: true, email: true },
      birthdate: { required: true, date: true },
    };
    this.erroneous = [];
  }

  updateInputValues = (event) => {
    event.persist();
    this.setState((state) => {
      state.formData[event.target?.name] = event.target?.value;
      return state;
    });
  };

  updateConditions = (event) => {
    event.persist();
    this.setState((state) => {
      state.formData[event.target?.name] = event.target?.checked;
      return state;
    });
  };

  changeCallback = (erroneous) => {
    this.erroneous = erroneous;
  };

  render() {
    console.log(this.erroneous.includes("firstname"));
    return (
      <React.Fragment>
        <form className="ui form">
          <div className="field">
            <label style={{ float: "left" }}>First Name</label>
            <input
              type="text"
              name="firstname"
              value={this.state.formData.firstname}
              onChange={this.updateInputValues}
              placeholder="First Name"
              style={{
                borderColor: this.erroneous.includes("firstname")
                  ? "#912D2B"
                  : null,
              }}
            />
          </div>
          <div className="field">
            <label style={{ float: "left" }}>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={this.state.formData.lastname}
              onChange={this.updateInputValues}
              placeholder="Last Name"
              style={{
                borderColor: this.erroneous.includes("lastname")
                  ? "#912D2B"
                  : null,
              }}
            />
          </div>
          <div className="field">
            <label style={{ float: "left" }}>Birth Date</label>
            <input
              type="text"
              name="birthdate"
              value={this.state.formData.birthdate}
              onChange={this.updateInputValues}
              placeholder="Birth Date"
              style={{
                borderColor: this.erroneous.includes("birthdate")
                  ? "#912D2B"
                  : null,
              }}
            />
          </div>
          <div className="field">
            <label style={{ float: "left" }}>E-mail</label>
            <input
              type="text"
              name="email"
              value={this.state.formData.email}
              onChange={this.updateInputValues}
              placeholder="E-mail"
              style={{
                borderColor: this.erroneous.includes("email")
                  ? "#912D2B"
                  : null,
              }}
            />
          </div>
          <div className="ui checkbox" style={{ float: "left" }}>
            <input
              type="checkbox"
              name="conditions"
              value={this.state.formData.conditions}
              onChange={this.updateConditions}
            />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </form>
        <FormValidator
          formData={this.state.formData}
          rules={this.rules}
          submit={this.props.submit}
          changeCallback={this.changeCallback}
        />
      </React.Fragment>
    );
  }
}
