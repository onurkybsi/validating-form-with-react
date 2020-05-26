import React, { Component } from "react";

export default class DisplayValidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      successful: false,
      closeClicked: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.closeClicked) {
      return {
        successful: props.formValid,
      };
    } else {
      return {
        ...state,
        closeClicked: false,
      };
    }
  }

  closeIcon = (e) => {
    this.setState((state) => ({
      successful: false,
      closeClicked: true,
    }));
  };

  successfulContent = (formValid) => {
    if (formValid) {
      return (
        <div className="ui success message">
          <i className="close icon" onClick={this.closeIcon}></i>
          <div className="header">Your user registration was successful.</div>
          <p>You may now log-in with the username you have chosen</p>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return this.successfulContent(this.state.successful);
  }
}
