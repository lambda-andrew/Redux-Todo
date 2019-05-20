import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
    todos: [{
        value: 'finish todo app',
        completed: false
    }]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return {
                ...state, 
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_TODO: 
            return {
                ...state,
                completed: action.payload
            }
        default: 
            return state;
    }
}

