import React, { useState } from "react";

export default function ColorPicker({ color, onChange }) {
  const [selectedColor, setSelectedColor] = useState(color);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    onChange(newColor);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: selectedColor }}>
        <p>Selected Color: {selectedColor}</p>
      </div>
      <label>Selected a Color:</label>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
    </div>
  );
}
