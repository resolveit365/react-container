import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <p className="counter-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        ➖
      </button>
      <button className="counter-button" onClick={reset}>
        0️⃣
      </button>
      <button className="counter-button" onClick={increment}>
        ➕
      </button>
    </div>
  );
}
