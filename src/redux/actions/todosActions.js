import {todosActionsMap} from "./todosActionsMap";

export const addTodo = (payload) => ({
    type: todosActionsMap.ADD_TODO,
    value: payload
});

export const removeTodo = (payload) => ({
    type: todosActionsMap.REMOVE_TODO,
    value: payload
});

export const updateCurrentTodo = (payload) => ({
    type: todosActionsMap.UPDATE_CURRENT_TODO,
    value: payload
});

export const resetTodos = () => ({
    type: todosActionsMap.RESET_TODOS
});