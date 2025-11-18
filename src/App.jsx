import { useRef, useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  // state
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricots" },
    { id: 2, nom: "Bananes" },
    { id: 3, nom: "Cerises" },
  ]);

  const [newFruit, setNewFruit] = useState("");

  // comportements
  const handleDelete = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  };

  const handleChange = (event) => {
    setNewFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fruitsCopy = [...fruits];
    const addFruit = { id: new Date().getTime(), nom: newFruit };
    fruitsCopy.push(addFruit);
    setFruits(fruitsCopy);
    setNewFruit("");
  };
  // affichage
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} />;
        })}
      </ul>
      <FruitForm newFruit={newFruit} onFruitSubmit={handleSubmit} onFruitChange={handleChange}/>
    </div>
  );
}

export default App;
