import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleMe, removeMe} from '../actions';
import './style.css'


class TodoList extends Component {

  state = {
      newTodo: ''
  }

  handleChange = (e) => {
      e.preventDefault();
      this.setState({
          newTodo: e.target.value
      })
  }

  addTodo = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.newTodo);
      this.setState({
          newTodo: ''
      })
  }

  toggleMe = (e, id) => {
    e.preventDefault();
    this.props.toggleMe(id)
  }

  removeMe = (e) => {
     e.preventDefault();
     this.props.removeMe();
  }

    render() {
        return (
            <React.Fragment>
              <input type="text" id="todo" 
                   placeholder="Add todo..." 
                   onChange={this.handleChange}
                   value={this.state.newTodo}
             />
            <button onClick={this.addTodo}>Add todo</button>
            <button onClick={this.removeMe}>Remove</button>
            <div>   
                {this.props.todos.map(todo => (
                    <div key={todo.id} >
                        <h3 onClick={(e) => this.toggleMe(e, todo.id)} className={todo.completed ? 'done' : '' }>
                            {todo.value}
                            {todo.completed} 
                        </h3>
                    </div>
                ))}
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps, {addTodo, toggleMe, removeMe})(TodoList);