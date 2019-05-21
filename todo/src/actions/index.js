export const ADD_TODO = "ADD_TODO";
export const TOGGLE_ME = 'TOGGLE_ME'


export const addTodo = todoItem => {
    return {
        type: ADD_TODO,
        payload: todoItem
    }
}

export const toggleMe = id=> {
    return {
        type: TOGGLE_ME,
        payload: id
    }
}