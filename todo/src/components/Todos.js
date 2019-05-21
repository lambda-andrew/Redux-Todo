import React from "react";
import {connect} from "react-redux";
import {addNewTodo, toggleTodo, deleteTodo} from "../actions";

import './Todos.css'

class Todos extends React.Component {
    state= {
        newTodo: "",
    };

    handleChange = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    addNewTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
        this.setState({
            newTodo:"",
        })
    }

    toggleTodo = (e, id) => {
        e.preventDefault()
        this.props.toggleTodo(id)
    }

    deleteTodo = e => {
        e.preventDefault()
        this.props.deleteTodo();
    }

    render(){
        console.log(this.props)
        return (
            <>
            <div>
                {this.props.todos.map(todo => (
                    <h5 className={todo.completed ? "crossedout" : ""} onClick={e => this.toggleTodo(e, todo.id)} key={todo.id}>{todo.name}</h5>
                ))}
            </div>
            <form onSubmit={this.addNewTodo}>
            <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newTodo}
            placeholder="Add new Todo"
            />
            <button type="submit">Click to add Todo!</button>
            <button onClick={this.deleteTodo}>Click to delete Todo!</button>
            </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

const mapActionsToProps = {
    addNewTodo,
    toggleTodo,
    deleteTodo
}

export default connect(mapStateToProps, mapActionsToProps)(Todos)