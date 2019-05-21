import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
    todos: [
        {
            id: 1,
            value: "Finish Redux Todo Project",
            completed: false
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    id: Date.now(),
                    value: action.payload,
                    completed: false
                })
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
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
            } 
        default:
            return state;
    }
}