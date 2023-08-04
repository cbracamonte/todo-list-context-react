import { createContext } from "react";
import { TodoStateModel } from "../models/Todo.model";

export type TodoContextProps = {
    todoState: TodoStateModel,
    toggleTodo: (id: number) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);