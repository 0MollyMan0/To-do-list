

type TodoFormProps = {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
  };
  
  const TodoForm = ({ newTask, setNewTask, handleAdd }: TodoFormProps) => {
    return (
        <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold'>My Todo App</h1>
        <p className='mb-4 flex text-gray-400
        hover:text-black hover:transition ease-in duration-300'>
            <a href="https://github.com/0MollyMan0">0MollyMan0</a>
        </p>

        {/*input new task*/}
            <input
                type="text"
                className="p-2 border-2 border-gray-200 rounded-lg 
                transition-all duration-200 ease-in-out
                focus:outline-none focus:border-black focus:scale-105 
                hover:scale-105 hover:shadow-md"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

        {/*button add*/}
            <button 
                className='px-4 py-2 m-1 rounded-xl bg-blue-500 text-white 
                hover:bg-blue-600 hover:scale-105 hover:transition ease-in-out duration-200 hover:shadow-md'
                onClick={handleAdd}
            >
                Ajouter
            </button>
        
        
    </div>
    )
};


export default TodoForm;
