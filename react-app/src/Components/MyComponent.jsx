import React, { useState, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function subtractCount() {
    setCount((c) => c - 1);
  }
  function resetCount() {
    setCount(0);
  }
  function addCount() {
    setCount((c) => c + 1);
  }
  function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  }
  useEffect(() => {
    document.getElementById("color-display").style.backgroundColor = color;
  }, [color]);
  return (
    <>
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <div id="count-buttons">
          <button onClick={subtractCount}>➖</button>
          <button onClick={resetCount}>0️⃣</button>
          <button onClick={addCount}>➕</button>
        </div>
        <button id="change-color-btn" onClick={changeColor}>
          Change Color
        </button>
        <div id="color-display">
          <p>{color}</p>
        </div>
      </div>
    </>
  );
}
