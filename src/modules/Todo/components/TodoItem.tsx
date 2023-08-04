import { TodoModel } from "../models/Todo.model";
import { useTodos } from "../hooks/useTodos";

interface TodoItemProps {
  todo: TodoModel;
}

function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo } = useTodos();

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.description}
    </li>
  );
}

export default TodoItem;
