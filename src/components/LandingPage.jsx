import React, { Component } from "react";
import TodoContainer from "./todo/TodoContainer";
import Heading from "./heading/Heading";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Heading />
        <TodoContainer />
      </React.Fragment>
    );
  }
}

export default LandingPage;
