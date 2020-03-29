import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

class TodoList extends Component {
  render() {
    return this.props.todos.map(todo => (
      <ListGroup className="container" style={{ width: "500px" }}>
        <Todo
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          deleteTodo={this.props.deleteTodo}
          checked={todo.completed}
        />
      </ListGroup>
    ));
  }
}

TodoList.propTypes = {
  todo: PropTypes.array.isRequired
};

export default TodoList;
