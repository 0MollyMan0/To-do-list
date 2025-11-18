export default function Fruit({fruitInfo, onFruitDelete}) {
  return (
    <li key={fruitInfo.id}>
      {fruitInfo.nom}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}