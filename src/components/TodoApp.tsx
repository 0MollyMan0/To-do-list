import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from "react";

export type Task = {
    id: number;
    content: string;
    done: boolean;
};

const TodoApp = () => {
    let idcount: number = 0
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);

    /*Send the new task to the actual ones*/
    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            idcount += 1;
            const newTodo: Task = {
                id: idcount,
                content: newTask,
                done: false
            };

            setTasks([...tasks, newTodo])
            setNewTask('');
        }
    }

    return <div className='flex w-[85%] min-h-screen'>

        {/**/}
        <div className='p-7 m-10 w-1/3 bg-slate-200 rounded-xl shadow-md flex flex-col items-center gap-3 ease-in-out duration-200'>
            <TodoForm newTask={newTask} setNewTask={setNewTask} handleAdd={handleAddTask}/>
        </div>

        {/**/}
        <div className='p-7 m-10 w-2/3 bg-slate-200 rounded-xl shadow-md flex flex-col items-start gap-3 ease-in-out duration-200'>
            <TodoList 
            tasks={tasks} 
            setTasks={setTasks} />
        </div>
    </div>
}


export default TodoApp;