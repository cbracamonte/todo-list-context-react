import { TodoModel, TodoStateModel } from "../models/Todo.model";

type TodoAction = | { type: 'addTodo', payload: TodoModel } | { type: 'toggleTodo', payload: { id: number } }

export const TodoReducer = (state: TodoStateModel, action: TodoAction): TodoStateModel => {
    console.log('action', action);
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({ ...todo }) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}