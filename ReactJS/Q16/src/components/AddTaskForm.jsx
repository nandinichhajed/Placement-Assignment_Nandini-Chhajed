import React, { useState } from "react";

const AddTaskForm = ({ setNewTodo }) => {
  const [task, setTask] = useState("");

  const handleTask = () => {
    setNewTodo({
      id: Date.now(),
      title: task,
      completed: false,
      isInProgress: false,
    });
    setTask("");
  };

  return (
    <div className="form-control w-full">
      <div className="input-group w-full">
        <input
          type="text"
          placeholder="Your next task ?"
          className="input input-bordered w-full "
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn" onClick={handleTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
