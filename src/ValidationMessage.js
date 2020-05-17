import React, { Component } from "react";

export default class ValidationMessage extends Component {
  render() {
    return (
      <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">We're sorry we can't apply that discount</div>
        <p>That offer has expired</p>
      </div>
    );
  }
}
