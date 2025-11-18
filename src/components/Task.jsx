export default function Task({taskInfo, onTaskDelete}) {
  return (
    <li>
      {taskInfo.nom}
      <button className="button-delete" onClick={() => onTaskDelete(taskInfo.id)}>X</button>
    </li>
  );
}