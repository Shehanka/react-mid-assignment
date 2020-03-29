import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

class TodoList extends Component {
  render() {
    return (
      <ListGroup className="container" style={{ width: "500px" }}>
        {this.props.todos
          .sort((a, b) => a.completed > b.completed)
          .map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              markComplete={this.props.markComplete}
              deleteTodo={this.props.deleteTodo}
              editTodo={this.props.editTodo}
              checked={todo.completed}
            />
          ))}
      </ListGroup>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
