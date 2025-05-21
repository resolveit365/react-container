import React, { useState } from "react";

export default function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    if (carMake && carModel) {
      setCars((prevCars) => [
        ...prevCars,
        { year: carYear, make: carMake, model: carModel },
      ]);
      setCarMake("");
      setCarModel("");
    }
  };
  const handleRemoveCar = (index) => {
    setCars((prevCars) => prevCars.filter((_, i) => i !== index));
  };
  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };
  const handleMakeChange = (event) => {
    setCarMake(event.target.value);
  };
  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div className="car-list-container">
      <h1>Car List</h1>
      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Year"
      />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
      <h2>Car Count: {cars.length}</h2>
      <h2>Car List:</h2>
      <ol>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ol>
    </div>
  );
}
