import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Todo extends Component {
  state = {};
  render() {
    const { id, title } = this.props.todo;
    return (
      <React.Fragment>
        <div className="container">
          <ListGroup.Item variant="primary">
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
              className="form-check-input"
            />{" "}
            {title}{" "}
            <button
              className="btn btn-danger"
              onClick={this.props.deleteTodo.bind(this, id)}
            >
              X
            </button>
          </ListGroup.Item>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
