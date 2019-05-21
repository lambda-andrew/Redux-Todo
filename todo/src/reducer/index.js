import { ADD_TODO } from '../actions';
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
            }
            default:
             return state;
    };
   
}