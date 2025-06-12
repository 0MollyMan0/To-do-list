import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from "react";

type TodoAppProps = {
    pseudo: string
}

const TodoApp = ({pseudo}: TodoAppProps) => {
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([]);

    /*Send the new task to the actual ones*/
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask])
        }
    }

    return <div className='flex w-[85%] min-h-screen'>

        {/**/}
        <div className='p-7 m-10 w-1/3 bg-slate-200 rounded-xl shadow-md flex flex-col items-center gap-3 ease-in-out duration-200 hover:scale-105'>
            <TodoForm newTask={newTask} setNewTask={setNewTask} handleAdd={handleAddTask}/>
        </div>

        {/**/}
        <div className='p-7 m-10 w-2/3 bg-slate-200 rounded-xl shadow-md flex flex-col items-start gap-3 ease-in-out duration-200 hover:scale-105'>
            <TodoList 
            tasks={tasks} 
            setTasks={setTasks} />
        </div>
    </div>
}


export default TodoApp;