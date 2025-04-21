import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/actions/taskActions";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique IDs

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = {
        id: uuidv4(), // Generate a unique ID
        description: task.trim(),
        isDone: false, // Default to not done
      };
      dispatch(addTask(newTask)); // Dispatch the new task object
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
