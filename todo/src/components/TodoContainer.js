import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions'
 
class TodoContainer extends React.Component {
    state = {
        todos: [],
        newTodo: {
            value: '',
            completed: false
        }
    }   

    handleChanges = e => {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                [e.target.name]: e.target.value
            }
        })
    }

    addNewTodo = e => {
        e.preventDefault();
        addTodo(this.state.newTodo)
    }

    render() {
        return (
            <div className='container'>
                <div className='form'>
                    <form onSubmit={this.addNewTodo}>
                        <input  onChange={this.handleChanges} value={this.state.newTodo.value} name='value'/>
                        <button>Add new Todo</button>
                    </form>
                </div>
                <div className='todo-list'>
                     {this.props.todosOnProps.map(todo => (
                         <h2>{todo.value}</h2>
                     ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todosOnProps: state.todos
    }
}

export default connect( mapStateToProps, {addTodo , toggleTodo} )(TodoContainer);


