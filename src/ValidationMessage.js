import React, { Component } from "react";

export default class ValidationMessage extends Component {
  render() {
    return (
      <div className="ui tiny error message">
        <ul className="list">
          <li>
            You must include both a upper and lower case letters in your
            password.
          </li>
        </ul>
      </div>
    );
  }
}
