type Task = {
    id: number;
    content: string;
    done: boolean;
};
  

type TodoListProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  };

  

const TodoList = ({ tasks, setTasks}: TodoListProps) => {
    return (
        <div className=''>
        <ul className="">
        {tasks.map((task, index) => (
            <li className='p-4 m-2 bg-slate-100 rounded-lg' 
            key= {index}>
                {task.content}
            </li>
        ))}   
        </ul>
      </div>
    );
};

export default TodoList;
