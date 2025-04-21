import React, { useState } from "react";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing && newDescription.trim()) {
      onEdit(task.id, newDescription.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: task.isDone ? "line-through" : "none",
          }}
        >
          {task.description}
        </span>
      )}
      <button onClick={() => onToggle(task.id)}>
        {task.isDone ? "Undo" : "Done"}
      </button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
