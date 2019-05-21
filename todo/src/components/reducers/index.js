import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        const newTodo = [
            ...state.todos,
            {id: Date.now(), value: action.payload, completed: false}]
        localStorage.setItem('todos', JSON.stringify(newTodo))
            return {
                ...state,
                todos: newTodo
                
            }
        case TOGGLE_TODO:
        const toggledTodo = state.todos.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo, 
                    completed: !todo.completed
                } 
            }
            else {
                return todo;
            }
        }
        )
        localStorage.setItem('todos', JSON.stringify(toggledTodo))
            return {
                ...state,
                todos: toggledTodo
            } 
        case DELETE_TODO: 
        const deletedTodo = state.todos.filter(todo => {
            return !todo.completed
        })
        localStorage.setItem('todos', JSON.stringify(deletedTodo))
            return {
                ...state,
                todos: deletedTodo
            }
        default:
            return state;
    }
}