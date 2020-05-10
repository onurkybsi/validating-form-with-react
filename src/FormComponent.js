import React, { Component } from "react";

export default class FormComponent extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label style={{ float: "left" }}>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div className="field">
          <label style={{ float: "left" }}>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="field">
          <label style={{ float: "left" }}>Birth Date</label>
          <input type="text" name="birth-date" placeholder="Birth Date" />
        </div>
        <div className="field">
          <label style={{ float: "left" }}>E-mail</label>
          <input type="text" name="e-mail" placeholder="E-mail" />
        </div>
        <div className="field">
          <div className="ui checkbox" style={{ float: "left" }}>
            <input type="checkbox" tabIndex="0" className="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
          <button style={{ float: "right" }} className="ui button" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
