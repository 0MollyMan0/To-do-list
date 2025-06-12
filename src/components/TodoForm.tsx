import { useState } from "react";


type TodoFormProps = {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
  };
  
  const TodoForm = ({ newTask, setNewTask, handleAdd }: TodoFormProps) => {
    return (
        <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold'>My Todo App</h1>
        <p className='mb-4 flex text-gray-400'>Par 0MollyMan0</p>

        {/*input new task*/}
            <input
                type="text"
                className="p-2 border rounded-lg"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

        {/*button add*/}
            <button 
                className='px-4 py-2 m-1 rounded-xl bg-blue-500 text-white hover:bg-blue-600 scale-105'
                onClick={handleAdd}
            >
                Ajouter
            </button>
        
        
    </div>
    )
};

export default TodoForm;
