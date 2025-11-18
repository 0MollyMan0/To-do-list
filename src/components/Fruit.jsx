export default function Fruit(props) {
  //state
  const fruitInfo = props.fruitInfo;
  const onFruitDelete = props.onFruitDelete;
  // comportements

  // affichage
  return (
    <li key={fruitInfo.id}>
      {fruitInfo.nom}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}