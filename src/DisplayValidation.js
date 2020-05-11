import React, { Component } from "react";

export default class DisplayValidation extends Component {
  detectErrors = (formData) => {
    let result = true;

    formData.forEach((element) => {
      if (!element.valid) {
        result = false;
      }
    });

    return [result, formData];
  };

  render() {
    let valid = this.detectErrors(this.props.formData);
    return (
      <div className={valid ? "ui success message" : "ui error message"}>
        <i className="close icon"></i>
        <div className="header">
          {valid ? "Your submission was successful." : "There are some errors!"}
        </div>
        <ul className="list">
          {this.props.formData.map((data) => {
              
          })}
        </ul>
      </div>
    );
  }
}
