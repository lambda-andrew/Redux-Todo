export const ADD_TODO = 'ADD_TODO';
export const ADD_COMPLETE = 'ADD_COMPLETE';

export const addTodo=(newTodo) => {
    console.log(newTodo);
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const addComplete = (newComplete) => {
    console.log(newComplete);
    return {
        type: ADD_COMPLETE,
        payload: newComplete
    }
}
