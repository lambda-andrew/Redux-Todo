import { ADD_TODO, TOGGLE_ME } from '../actions';
import uuid from 'uuid';

const initialState = {
    todos:[]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,
                        {id: uuid(), value: action.payload, completed: false}
                ]
            };
        case TOGGLE_ME:
            return {
                ...state,
                todos: state.todos.map(todo =>  {
                    if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                    
                    }else{
                        return todo;
                 }
            })
        };
            default:
             return state;
    };
   
} // end of reducer 

export default reducer;