import { UPDATE_TODOLIST } from '../actions'

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
        case UPDATE_TODOLIST:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}