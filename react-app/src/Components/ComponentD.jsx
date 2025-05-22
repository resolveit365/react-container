import React, { useContext } from "react";
import MyContext from "./MyContext";

export default function ComponentB() {
  const sharedValue = useContext(MyContext);

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>Goodbye, {sharedValue}</h2>
    </div>
  );
}
