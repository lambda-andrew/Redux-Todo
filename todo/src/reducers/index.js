import { ADD_TODO, ADD_COMPLETE } from '../actions';

const initialState = {
    title: "CHECKLIST",
    todos: [
        {
            id: 0,
            value: 'buy milk',
            completed: false
        }
    ],
    nextId: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            action.payload.id = state.nextId;
            return {
                todos: [...state.todos, action.payload],
                nextId: state.nextId + 1
            };
        case ADD_COMPLETE:
            let newTodoList = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })

            return {
                ...state,
                todos: newTodoList
            };


        default:
            return state;
    }
}