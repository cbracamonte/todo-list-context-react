import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

function TodoList() {
  const { todos } = useTodos();
  return (
    <>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
