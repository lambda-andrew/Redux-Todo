export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addNewTodo = todo => {
    return {
        type: ADD_NEW_TODO,
        payload: todo
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const deleteTodo = () => {
    return {
        type: DELETE_TODO,
    }
}
