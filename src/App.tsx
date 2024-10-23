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
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              onCompletedChange={setTodoCompleted}
              key={todo.id}
            />
          ))}
          {}
        </div>
      </div>
    </main>
  );
}

export default App;
