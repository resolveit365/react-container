import React, { useContext } from "react";
import MyContext from "./MyContext";
import ComponentD from "./ComponentD";

export default function ComponentB() {
  const sharedValue = useContext(MyContext);

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>You're still here, {sharedValue}?</h2>
      <ComponentD />
    </div>
  );
}
