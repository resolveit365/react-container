import React from "react";
import MyContext from "./Components/MyContext";
import ComponentA from "./Components/ComponentA";

export default function App() {
  const sharedValue = "Brad Peyton";

  return (
    <MyContext.Provider value={sharedValue}>
      <ComponentA />
    </MyContext.Provider>
  );
}
