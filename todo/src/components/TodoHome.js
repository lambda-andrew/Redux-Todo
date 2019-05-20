import React from 'react';
import { connect } from "react-redux";
import { addTodo } from '../components/actions'

class TodoHome extends React.Component {
  state = {
      Newtodos: [
          {
              value: '',
              completed: false
          }
      ]
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault()
    const newPayload = {
      id: Date.now(),
      value: this.state.Newtodos
    }
    this.props.addTodo(newPayload)
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
                value={this.state.Newtodos.value}
                onChange={this.handleChanges}
            />
            <button onClick={this.addTodo}>Add Todo</button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
      todosOnProps: state.todos
    }
  }


export default connect(mapStateToProps, addTodo)(TodoHome)