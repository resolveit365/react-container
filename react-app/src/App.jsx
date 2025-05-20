import List from "./List.jsx";

const fruits = [
  { id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 105 },
  { id: 4, name: "coconut", calories: 159 },
  { id: 5, name: "pineapple", calories: 37 },
];

const vegetables = [
  { id: 1, name: "potato", calories: 110 },
  { id: 2, name: "celery", calories: 15 },
  { id: 3, name: "carrot", calories: 25 },
  { id: 4, name: "corn", calories: 63 },
  { id: 5, name: "broccoli", calories: 50 },
];

// fruits.sort((a, b) => a.name.localeCompare(b.name)); // SORT ALPHABETICALLY
// fruits.sort((a, b) => b.name.localeCompare(a.name)); // SORT REVERSE
// fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
// fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// lowCalFruits.sort((a, b) => a.calories - b.calories);
// lowCalFruits.sort((a, b) => b.calories - a.calories);

function App() {
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
    </>
  );
}

export default App;
