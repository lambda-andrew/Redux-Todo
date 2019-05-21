import React from 'react';
import { connect } from "react-redux";
import { addTodo, toggleTodo } from '../components/actions'

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

  toggleTodo = (e, id) => {
      e.preventDefault()
      this.props.toggleTodo(id)
  }
  render() {
    return (
        <>
        <h1>My Todo List:</h1>
        <div className="todoHome">
            {this.props.todosOnProps.map(item => (
                <h4 onClick={(e)=>this.toggleTodo(e, item.id)} key={item.id}>{item.completed && <i className="far fa-check-square"></i>}{' '}{item.value}</h4>
            ))}
            <form>
                <input
                    type="text"
                    name="newTodoValue"
                    placeholder="..."
                    value={this.state.newTodos}
                    onChange={this.handleChanges}
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </form>
        </div>
        </>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      todosOnProps: state.todos
    }
  }

const mapActionToProps = {
    addTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapActionToProps)(TodoHome)