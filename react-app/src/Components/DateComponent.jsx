import React, { useState, useEffect } from "react";

export default function DateComponent() {
  const [date, setDate] = useState(new Date());

  function formatDate() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update every second
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="date-container">
      <div className="date">
        <span>{formatDate()}</span>
      </div>
    </div>
  );
}
