import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

class Todo extends Component {
  state = {};
  useStyle = () => {
    return {
      fontWeight: "bold",
      height: "65px",
      fontFamily: "Baloo Thambi 2"
    };
  };
  render() {
    const { id, title, completed } = this.props.todo;

    return (
      <React.Fragment>
        <div
          className="container"
          style={{
            textDecoration: completed === true ? "line-through" : "none"
          }}
        >
          <ListGroup.Item
            style={this.useStyle()}
            variant={completed === true ? "primary" : null}
          >
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
              className="form-check-input"
              checked={completed}
            />{" "}
            {title}{" "}
            <div style={{ float: "right" }}>
              <button
                className="btn btn-primary"
                onClick={this.props.editTodo.bind(this, id, title)}
              >
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
