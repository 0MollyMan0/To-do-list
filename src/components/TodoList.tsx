type TodoListProps = {
    tasks: string[];
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  };
  
  const TodoList = ({ tasks, setTasks}: TodoListProps) => {
    return (
      <div className=''>
        <ul className="">
        {tasks.map((task, index) => (
            <li className='p-4 m-2 bg-slate-100 rounded-lg' 
            key= {index}>
                {task}
            </li>
        ))}   
        </ul>
      </div>
    );
  };

export default TodoList;
