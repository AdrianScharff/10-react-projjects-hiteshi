import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 15;

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const subtractValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>React course with Hitesh {counter}</h1>
      <h2>Coutner value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={subtractValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
