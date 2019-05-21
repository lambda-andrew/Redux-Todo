import React, { Component } from 'react';
import Todos from './Todos';
import './App.css';
//import { createStore } from 'redux';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'learn Redux' },
      { id: 2, content: 'do some yoga' },

    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>

    );
  }
}

export default App;
