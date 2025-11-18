export default function FruitForm({newFruit, onFruitSubmit, onFruitChange}) {
  return (
        <form action="submit" onSubmit={onFruitSubmit}>
        <input
          value={newFruit}
          type="text"
          placeholder="Ajouter un fruit..."
          onChange={onFruitChange}
        />
        <button>Ajouter</button>
      </form>
  );
}