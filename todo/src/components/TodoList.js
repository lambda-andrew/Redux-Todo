import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleMe, removeMe} from '../actions';
import Styled from 'styled-components';

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
            <Wrapper>
              <input type="text" id="todo" 
                   placeholder="Add todo..." 
                   onChange={this.handleChange}
                   value={this.state.newTodo}
             />
            <button onClick={this.addTodo}>Add Todo</button>
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
        </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const Wrapper = Styled.div `

margin-top: 50px;
    input {
        width: 200px;
        font-size: 1rem;
        text-indent: 5px;
        height: 30px;
        margin-right: 10px;
    }
    button {
        font-size: 1rem;
        padding: 6px;
        margin-left:6px;
    }
    h3 {
        cursor: pointer;
        font-size: 2rem;
    }
`


export default connect(mapStateToProps, {addTodo, toggleMe, removeMe})(TodoList);