import React, { Component } from "react";

export default class DisplayValidation extends Component {
  successfulContent = (formValid) => {
    if (formValid) {
      return (
        <div className="ui success message">
          <i className="close icon"></i>
          <div className="header">Your user registration was successful.</div>
          <p>You may now log-in with the username you have chosen</p>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return this.successfulContent(this.props.formValid);
  }
}
