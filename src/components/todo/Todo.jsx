import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

class Todo extends Component {
  state = {};
  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <React.Fragment>
        <div className="container">
          <ListGroup.Item
            style={{ height: "65px" }}
            variant={completed === true ? "success" : null}
          >
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
              className="form-check-input"
              checked={completed}
            />{" "}
            {title}{" "}
            <div style={{ float: "right" }}>
              <button className="btn btn-primary">
                <MdModeEdit />
              </button>{" "}
              <button
                className="btn btn-danger"
                onClick={this.props.deleteTodo.bind(this, id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </ListGroup.Item>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
