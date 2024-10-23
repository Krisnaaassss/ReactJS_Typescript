import React from "react";
import { dummyData } from "./data/todo";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = React.useState(dummyData);
  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const AddToForm = (title: string) => {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl mb-5 text-center">To Do List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-5">
        <AddForm onSubmit={AddToForm} />
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} />
      </div>
    </main>
  );
}

export default App;
