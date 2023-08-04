import TodoLabel from "../components/TodoLabel";
import TodoList from "../components/TodoList";
import { TodoProvider } from "../context/TodoProvider";

function Todo() {
  return (
    <TodoProvider>
      <TodoList />
      <TodoLabel />
    </TodoProvider>
  );
}

export default Todo;
