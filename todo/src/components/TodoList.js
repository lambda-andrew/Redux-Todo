import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import styled from 'styled-components';

const  TodoListDiv= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

class TodoList extends React.Component {
    constructor(props){
        super (props)
    }
    render () {
        return (
            <TodoListDiv>
            {this.props.todos.map(todo=> <Todo value = {todo.value} completed={todo.completed} id ={todo.id}/> )}
            </TodoListDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(TodoList);