import React, { useState } from "react";
import List from "./components/List";

const groceries = [
  {
    id: 1,
    name: "Milk",
  },
  {
    id: 2,
    name: "Eggs",
  },
  {
    id: 3,
    name: "Cheese",
  },
  {
    id: 4,
    name: "Cake Mix",
  },
  {
    id: 5,
    name: "Carrots",
  },
  {
    id: 6,
    name: "Juice",
  },
];

function App() {
  const [counter, setCounter] = useState();

  const onClick = () => {
    let updateCounter = counter++;
    setCounter(updateCounter);
    console.log(counter);
  };

  return (
    <>
      <List groceries={groceries} />
      <h1>Counter:{counter}</h1>
      <button onClick={onClick}>Click</button>
    </>
  );
}

export default App;
