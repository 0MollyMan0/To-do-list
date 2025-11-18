import { useState } from "react";

export default function FruitForm({handleAdd}) {
    const [newFruit, setNewFruit] = useState("");
  
    const handleChange = (event) => {
      setNewFruit(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const addFruit = { id: new Date().getTime(), nom: newFruit };
      handleAdd(addFruit);
      setNewFruit("");
    };

    return (
        <form action="submit" onSubmit={handleSubmit}>
        <input
          value={newFruit}
          type="text"
          placeholder="Ajouter un fruit..."
          onChange={handleChange}
        />
        <button>Ajouter</button>
      </form>
  );
}