import React, { useState } from "react";

export default function MyComponent() {
  const [car, setCar] = useState({
    year: 2025,
    make: "Tesla",
    model: "Cybertruck",
  });

  function handleYearChange(event) {
    const newYear = event.target.value;
    setCar((prevCar) => ({ ...prevCar, year: newYear }));
  }

  function handleMakeChange(event) {
    const newMake = event.target.value;
    setCar((prevCar) => ({ ...prevCar, make: newMake }));
  }
  function handleModelChange(event) {
    const newModel = event.target.value;
    setCar((prevCar) => ({ ...prevCar, model: newModel }));
  }

  return (
    <div>
      <p>
        Your car: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}
