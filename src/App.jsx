import { useRef, useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, nom: "Task Example" },
  ]);

  const handleDelete = (id) => {
    const tasksCopy = [...tasks];
    const tasksCopyUpdated = tasksCopy.filter((task) => task.id !== id);
    setTasks(tasksCopyUpdated);
  };

  const handleAdd = (addtask) => {
      const tasksCopy = [...tasks];
      tasksCopy.push(addtask);
      setTasks(tasksCopy);
  }

  return (
    <div className="container">
      <h1>To-do-list</h1>
      <ul>
        {tasks.map((task) => (
          <Task 
            taskInfo={task} 
            onTaskDelete={handleDelete}
            key={task.id} 
          />
        ))}
      </ul>
      <TaskForm handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
