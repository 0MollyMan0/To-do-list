import './styles/style-modules.css';


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
              <div key={index} className="relative p-4 pr-40 m-2 bg-slate-100 rounded-lg shadow-sm
              smooth-hover hover:shadow-md">


            {/*Tasks*/}
              <span className="">
                {task.content}
                </span>
          
            {/*Done button*/}
              <button
                //onClick={console.log("bouton clique")}
            //     className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded 
            //  transition-transform duration-200 origin-top-right hover:scale-125"
                className="px-2 py-1 m-1 absolute top-2 right-14 border-2 border-blue-500 rounded shadow-sm text-slate-100
                transition-transform duration-200 hover:scale-125 hover:shadow-md hover:border-blue-600"
              >
                ✕
              </button>
            

            {/*Edit button*/}
            <button
            //onClick={console.log("bouton clique")}
            className="m-1 absolute top-2 right-2 border-2 border-blue-500 px-2 py-2 rounded shadow-sm
            transition-transform duration-200 hover:scale-125 hover:shadow-md hover:border-blue-600"
            >
            <img src="/img/stylo-modifier.png" alt="Edit"  className="w-4 h-4"/>
          </button>
        </div>
            
        ))}   
        </ul>
      </div>
    );
};

export default TodoList;
