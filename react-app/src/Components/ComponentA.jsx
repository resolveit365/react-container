import React, { useContext } from "react";
import MyContext from "./MyContext";
import ComponentB from "./ComponentB";

export default function ComponentA() {
  const sharedValue = useContext(MyContext);

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>Hello, {sharedValue}</h2>
      <ComponentB />
    </div>
  );
}
