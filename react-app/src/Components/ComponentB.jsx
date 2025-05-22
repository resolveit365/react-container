import React, { useContext } from "react";
import MyContext from "./MyContext";
import ComponentC from "./ComponentC";

export default function ComponentB() {
  const sharedValue = useContext(MyContext);

  return (
    <div className="box">
      <h1>ComponentB</h1>
      <h2>Hello again, {sharedValue}?</h2>
      <ComponentC />
    </div>
  );
}
