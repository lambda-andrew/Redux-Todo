export const UPDATE_TODOLIST = "UPDATE_TODOLIST"

export const updateTodoList = todos => {
    return {
        type: UPDATE_TODOLIST,
        payload: todos
    }
}