import React, { useState } from "react";

export default function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    if (!newFood) {
      alert("Please enter a food item.");
      return;
    }
    if (foods.includes(newFood)) {
      alert("This food item already exists in the list.");
      return;
    }
    setFoods((prevFoods) => [...prevFoods, newFood]);
    document.getElementById("foodInput").value = ""; // Clear the input field
  }

  function handleRemoveFood(index) {
    const newFoods = foods.filter((_, i) => i !== index);
    setFoods(newFoods);
    alert(`Removed food item: ${foods[index]}`);
  }

  return (
    <div className="food-list">
      <h2>List of Food</h2>
      <div className="food-list-container">
        <ul className="food-list-items">
          {foods.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {food}
            </li>
          ))}
        </ul>
      </div>
      <input type="text" id="foodInput" placeholder="Add food" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
