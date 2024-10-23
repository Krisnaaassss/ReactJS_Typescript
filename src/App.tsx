import React from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todo";
import AddForm from "./components/AddForm";

function App() {
  const [todos, setTodos] = React.useState(dummyData);
  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl mb-5 text-center">To Do List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <AddForm />
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem todo={todo} onCompletedChange={setTodoCompleted} />
          ))}
          {}
        </div>
      </div>
    </main>
  );
}

export default App;
