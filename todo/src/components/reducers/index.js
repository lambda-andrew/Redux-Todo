import { ADD_TODO } from '../actions'

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
        default:
            return state;
    }
}