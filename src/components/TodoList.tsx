import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index: number, editedTodo: string) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" onClick={(e) => addTodo(e)}>
          제출
        </button>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => deleteTodo(index)}
              onEdit={(e: React.MouseEvent, editedTodo: string) =>
                editTodo(index, editedTodo)
              }
            />
          ))}
        </ul>
        <hr />
      </form>
      <h2>Completed Todos</h2>
    </div>
  );
};

export default TodoList;
