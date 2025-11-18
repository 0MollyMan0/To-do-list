import { useState } from "react";

export default function TaskForm({handleAdd}) {
    const [newTask, setNewTask] = useState("");
  
    const handleChange = (event) => {
      setNewTask(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const addTask = { id: new Date().getTime(), nom: newTask };
      handleAdd(addTask);
      setNewTask("");
    };

    return (
        <form action="submit" onSubmit={handleSubmit}>
        <input
          value={newTask}
          type="text"
          placeholder="Write a task..."
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
  );
}