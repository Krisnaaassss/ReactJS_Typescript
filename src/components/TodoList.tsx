import { Todo } from "../data/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onCompletedChange, onDelete }: TodoListProps) => {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <div className="space-y-2">
      {todosSorted.map((todo) => (
        <TodoItem
          todo={todo}
          onCompletedChange={onCompletedChange}
          key={todo.id}
        />
      ))}
      {}
    </div>
  );
};

export default TodoList;
