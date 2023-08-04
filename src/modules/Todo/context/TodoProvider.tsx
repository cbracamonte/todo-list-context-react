import { useReducer } from "react";
import { TodoStateModel } from "../models/Todo.model";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";

const TODO_INITIAL_STATE: TodoStateModel = {
  todoCount: 2,
  todos: [
    {
      id: 1,
      completed: false,
      description: "Aprender Context",
    },
    {
      id: 2,
      completed: false,
      description: "Aprender Redux",
    },
    {
      id: 3,
      completed: false,
      description: "Aprender React Router Dom",
    },
  ],
  completed: 0,
  pending: 2,
};

interface TodoProviderProps {
  children: React.JSX.Element | React.JSX.Element[];
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(TodoReducer, TODO_INITIAL_STATE);

  const toggleTodo = (id: number) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
