import { useRef, useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricots" },
    { id: 2, nom: "Bananes" },
    { id: 3, nom: "Cerises" },
  ]);

  const handleDelete = (id) => {
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (addFruit) => {
      const fruitsCopy = [...fruits];
      fruitsCopy.push(addFruit);
      setFruits(fruitsCopy);
  }

  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          return <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} />;
        })}
      </ul>
      <FruitForm handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
