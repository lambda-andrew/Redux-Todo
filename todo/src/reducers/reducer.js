import {ADD_NEW_TODO} from "../actions";
import {TOGGLE_TODO} from "../actions";
import {DELETE_TODO} from "../actions";

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
};

function reducer(state = initialState, action){
    switch(action.type) {
        case ADD_NEW_TODO:
        const newTodoArr = [
            ...state.todos,
            {
                id: Date.now(),
                name: action.payload,
                completed: false,
            }
        ]
        localStorage.setItem('todos', JSON.stringify(newTodoArr))
        return {
            ...state,
            todos: newTodoArr
        }
        case TOGGLE_TODO:
        const toggledTodoArr = state.todos.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    completed: !todo.completed
                } 
            } else {
                return todo;
            }
        })
        localStorage.setItem('todos', JSON.stringify(toggledTodoArr));
        return {
            ...state,
            todos: toggledTodoArr,
        };
        case DELETE_TODO:
        const deletedTodoArr = state.todos.filter(todo => !todo.completed);
        localStorage.setItem('todos', JSON.stringify(deletedTodoArr));
        return {
            ...state,
            todos: deletedTodoArr
        }
    default: 
        return state;
    }
}

export default reducer;

//old initialstate
// {
//     id: 0,
//     name: "Walk the dog",
//     completed: false,
// },
// {
//     id: 1,
//     name: "Learn redux",
//     completed: false,
// },
// {
//     id: 2,
//     name: "Install Microsoft Flight Simulator X",
//     completed: true,
// }
//case TOGGLE TODOS
// return {
//     ...state,
//     todos: state.todos.map(todo => {
//         if (todo.id === action.payload) {
//             return {
//                 ...todo,
//                 completed: !todo.completed
//             } 
//         } else {
//             return todo;
//         }
//     })
// };
// case DELETE_TODO:
// return {
//     ...state,
//     todos: state.todos.filter(todo => !todo.completed)
// }