// First Version //


import '../styles/style-modules.css';


type Task = {
    id: number;
    content: string;
    done: boolean;
};
  

type TodoListProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  };

const  tasksList = document.getElementById('tasksList')
console.log(tasksList);


  
const TodoList = ({ tasks, setTasks}: TodoListProps) => {

  const moveTaskUp = (index: number) => {
    setTasks((prev) => {
      // Do nothing if the element is at the very top
      if (index === 0) return prev;

      const copy = [...prev];
      // Swap the index with the element below
      [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
      return copy;
    });
  };
  
  const moveTaskDown = (index: number) => {
    setTasks((prev) => {
      // do nothing if the element is at the very bottom
      if (index === tasks.length - 1) return prev;

      const copy = [...prev];
      // Swap the index with the element above
      [copy[index + 1], copy[index]] = [copy[index], copy[index + 1]];
      return copy;
    });
  };

  return (
    <div className=''>
        <ul className="" id='tasksList'>
        {tasks.map((task, index) => (
              <div key={index} className="relative p-4 pr-60 m-2 bg-slate-100 rounded-lg shadow-sm
              smooth-hover hover:shadow-md">


            {/*Tasks*/}
              <span className="">
                {task.content}
                </span>
          
            {/*Done button*/}
              <button
              onClick={() => console.log('Done')}
                className="px-2 py-1 m-1 absolute top-2 right-14 border-2 border-blue-500 rounded shadow-sm text-slate-100
                transition-transform duration-200 hover:scale-125 hover:shadow-md hover:border-blue-600"
              >
                ✕
              </button>
            

            {/*Edit button*/}
            <button
            onClick={() => console.log("Edit")}
            className="m-1 absolute top-2 right-2 border-2 border-blue-500 px-2 py-2 rounded shadow-sm
            transition-transform duration-200 hover:scale-125 hover:shadow-md hover:border-blue-600"
            >
            <img src="/img/stylo-modifier.png" alt="Edit"  className="w-4 h-4"/>
          </button>
          
            {/*Get up*/}
            <button
            onClick={() => moveTaskUp(index)}
            className={`... ${index === 0 ? 'opacity-30 cursor-not-allowed m-1 absolute top-2 right-28  px-2 py-2 -rotate-90' : 'm-1 absolute top-2 right-28  px-2 py-2 -rotate-90 transition-transform duration-200 hover:scale-125' }`}
            >
            {">"}
          </button>
          
            {/*Get down*/}
            <button
            onClick={() => moveTaskDown(index)}
            className={`... ${index === tasks.length - 1 ? 'opacity-30 cursor-not-allowed m-1 absolute top-2 right-36  px-2 py-2 rotate-90' : 'm-1 absolute top-2 right-36  px-2 py-2 rotate-90 transition-transform duration-200 hover:scale-125' }`}
            >
            {">"}
          </button>
        </div>
        ))}   
        </ul>
    </div>
  );
};

export default TodoList;











