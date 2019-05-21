import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import Styled from 'styled-components';



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

    render(){
        return (
            <div>
                <h3>Todo List</h3>
                <form>
                    <input type="text" id="todo" placeholder="Add todo..." onChange={this.handleChange} value={this.state.newTodo}/>
                    <button onClick={this.addTodo}>Add Todo</button>
                </form>

                {this.props.todos.map((todo) => {
                    return (
                        <Card key={todo.id}>
                            <Todo todo={todo}/>
                        </Card>
                    )
                })}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const Card = Styled.div `

display: flex:
flex-direction: column;
justify-content: center;
    border-bottom: 1px solid gray;
    width: 300px;
    margin: 0 auto;
    cursor: pointer;
`

export default connect(mapStateToProps, {addTodo})(TodoList);