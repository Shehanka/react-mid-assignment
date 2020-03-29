import React, { Component } from "react";
import uuid from "react-uuid";
import TodoList from "./TodoList";
import Form from "react-bootstrap/Form";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: 1, title: "trash clean", completed: false },
      { id: 2, title: "node app", completed: true },
      { id: 3, title: "docker build", completed: false }
    ],
    title: ""
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      title: ""
    });
  };

  stripeStyle = () => {
    return {
      width: "100%",
      height: "50px",
      backgroundColor: "#3498db"
    };
  };

  onChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    this.addTodo(this.state.title);
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.stripeStyle()}>
          All todos : {this.state.todos.length}
        </div>

        <br />
        <div>
          <div className="container">
            <Form.Group onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-6">
                  <Form.Control
                    type="text"
                    placeholder="Enter todo"
                    name="title"
                    onChange={this.onChanged}
                    value={this.state.title}
                  />
                </div>
                <div className="col-sm-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onSubmit}
                  >
                    New Todo
                  </button>
                </div>
              </div>
            </Form.Group>
          </div>
        </div>

        <TodoList
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </React.Fragment>
    );
  }
}

export default TodoContainer;
