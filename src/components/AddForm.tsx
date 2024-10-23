import React from "react";

interface AddTodoItemProps {
  onSubmit: (title: string) => void;
}
const AddForm = ({ onSubmit }: AddTodoItemProps) => {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add Todo List Here"
        className="rounded-s-md grow border border-gray-400 p-2  "
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
};

export default AddForm;
