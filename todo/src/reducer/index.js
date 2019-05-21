import { ADD_TODO } from '../actions';

const initialState = {
    todos:[]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,
                        {value: action.payload, completed: false}
                ]
            }
            default:
             return state;
    };
   
}