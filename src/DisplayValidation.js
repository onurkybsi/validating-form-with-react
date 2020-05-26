import React, { Component } from "react";

export default class DisplayValidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValid: false,
      closeClicked: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.closeClicked) {
      return {
        formValid: props.formValid,
      };
    } else {
      return {
        ...state,
        closeClicked: false,
      };
    }
  }

  closeMessage = (e) => {
    this.setState((state) => ({
      formValid: false,
      closeClicked: true,
    }));
  };

  content = (formValid) => {
    if (formValid) {
      return (
        <div className="ui success message">
          <i className="close icon" onClick={this.closeMessage}></i>
          <div className="header">Your user registration was successful.</div>
          <p>You may now log-in with the username you have chosen</p>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return this.content(this.state.formValid);
  }
}
