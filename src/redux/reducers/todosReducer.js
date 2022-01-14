import {todosActionsMap} from "../actions/todosActionsMap";
import {uniqueId} from 'lodash';

const initialState = {
    currentTodo: '',
    todos: [
        { id: uniqueId(), name: 'todo-001', isComplete: false },
        { id: uniqueId(), name: 'todo-002', isComplete: false },
        { id: uniqueId(), name: 'todo-003', isComplete: false }
    ],
    state: '',
    planets: []
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case todosActionsMap.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uniqueId(),
                        name: action.value,
                        isCompleted: false
                    }
                ]
            }
        case todosActionsMap.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.value)
            }
        case todosActionsMap.UPDATE_CURRENT_TODO:
            return {
                ...state,
                currentTodo: action.payload
            }
        case todosActionsMap.RESET_TODOS:
            return initialState;
        default:
            return state
    }
}