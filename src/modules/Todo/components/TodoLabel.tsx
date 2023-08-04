import { useTodos } from "../hooks/useTodos";

function TodoLabel() {
  const { pendingTodos } = useTodos();
  return pendingTodos > 0 ? (
    <h4>Tienes {pendingTodos} por completar</h4>
  ) : (
    <></>
  );
}

export default TodoLabel;
