/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function TodoList({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() === "") return alert("Isi inputan lebih dahulu!");

    const addedTodo = { id: Date.now().toString(), text: input };
    setTodos([...todos, addedTodo]);
    setInput("");
  };

  const handleDeleteTodo = (deleteID) => {
    setTodos(todos.filter((todo) => todo.id !== deleteID));
  };

  return (
    <div className="container">
      <h2>My Todo List</h2>
      <div>
        <input
          type="text"
          className="input-text"
          value={input}
          placeholder="Example: Belajar coding NextJS"
          onChange={handleInputChange}
        />
        <button className="button-add" onClick={handleAddTodo}>
          Tambah
        </button>
      </div>
      {todos.length > 0 ? (
        <ol>
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: "10px" }}>
              {todo.text}
              <button className="button-delete" onClick={() => handleDeleteTodo(todo.id)}>
                Hapus
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <p style={{ color: "#EA4C89" }}>Tidak ada data</p>
      )}
    </div>
  );
}

export default TodoList;
