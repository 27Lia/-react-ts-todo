import React, { useState } from "react";

interface TodoItemProps {
  todo: string;
  onDelete: (e: React.MouseEvent) => void;
  onEdit: (e: React.MouseEvent, editedTodo: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    onEdit(e, editedTodo);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <form>
            <input
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
            <button onClick={handleSave} type="submit">
              Save
            </button>
          </form>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <button onClick={(e) => onEdit(e)}>Edit</button>
          <button onClick={(e) => onDelete(e)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
