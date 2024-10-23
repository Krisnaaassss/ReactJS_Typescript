import "./App.css";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todo";

function App() {
  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl">To Do List</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map((todo) => (
            <TodoItem todo={todo} />
          ))}
          {}
        </div>
      </div>
    </main>
  );
}

export default App;
