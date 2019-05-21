import React from 'react';
import { connect } from "react-redux";
import { addTodo } from '../components/actions'

class TodoHome extends React.Component {
  state = {
      newTodos: ""
  }

  handleChanges = e => {
    this.setState({ newTodos: e.target.value});
  };

  addTodo = e => {
    e.preventDefault()
   this.props.addTodo(this.state.newTodos)
  }
  render() {
    return (
        <div>
            {this.props.todosOnProps.map(item => (
                <h4 key={item.id}>{item.value}</h4>
            ))}
            <input
                type="text"
                name="newTodoValue"
                value={this.state.newTodos}
                onChange={this.handleChanges}
            />
            <button onClick={this.addTodo}>Add Todo</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      todosOnProps: state.todos
    }
  }

const mapActionToProps = {
    addTodo
}

export default connect(mapStateToProps, mapActionToProps)(TodoHome)