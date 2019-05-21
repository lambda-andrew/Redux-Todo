export const ADD_TODO = "ADD_TODO";

export const addTodo = todoItem => {
    return {
        type: ADD_TODO,
        payload: todoItem
    }
}