import React, { useState } from 'react';
import style from '../Components/style.css';

const Todo = ({ todos, setTodos }) => {
  const handleEdit = (id, editedTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: editedTitle } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.editedTitle || todo.title}
            className="list"
            onChange={(event) => {
              const newEditedTitle = event.target.value;
              const updatedTodos = todos.map((t) =>
                t.id === todo.id ? { ...t, editedTitle: newEditedTitle } : t
              );
              setTodos(updatedTodos);
            }}
          />
          <button
            onClick={() => handleEdit(todo.id, todo.editedTitle)}
            className="button-edit"
          >
            Edit
          </button>
          <button onClick={() => handleDelete(todo.id)} className="button-delete">
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todo;

