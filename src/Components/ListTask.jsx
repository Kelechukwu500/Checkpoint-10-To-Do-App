import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "../Components/Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleEdit = (id, newDescription) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id, description: newDescription },
    });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not done") return !task.isDone;
    return true;
  });

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("not done")}>Not Done</button>
      </div>
      {filteredTasks.length > 0 ? (
        <ul>
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggle={handleToggle}
              onEdit={handleEdit}
            />
          ))}
        </ul>
      ) : (
        <p>No tasks available for the selected filter.</p>
      )}
    </div>
  );
};

export default ListTask;
