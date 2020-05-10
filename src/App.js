import React, { Component } from "react";
import "./App.css";
import FormComponent from "./FormComponent";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
    };
  }

  render() {
    return (
      <div className="ui two column centered grid" style={{ marginTop: "30px" }}>
        <div className="ui raised very padded text container segment">
          <FormComponent />
        </div>
        <div className="ui raised very padded text container segment">
        </div>
      </div>
    );
  }
}
