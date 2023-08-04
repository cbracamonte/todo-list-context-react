export interface TodoStateModel {
    todoCount: number,
    todos: Array<TodoModel>,
    completed: number,
    pending: number,
}

export interface TodoModel {
    id: number;
    description: string;
    completed: boolean
}