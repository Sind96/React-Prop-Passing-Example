import { useState } from "react";

import Box1 from "./components/box1";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Enter Name");
  const [age, setAge] = useState("Enter Age");

  const user = {
    name,
    age,
  };

  return (
    <>
      <div className="p-8">
        <div className="mb-4">
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          ></input>
          <label htmlFor="age">Enter your age: </label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 rounded"
          ></input>
        </div>

        <div className="p-4 mt-4 border-t">
          <h2 className="text-xl font-semibold mb-2">Counter</h2>
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <h1>{count}</h1>
          <button onClick={() => setCount((count) => count - 1)}>
            Decrement
          </button>
        </div>
      </div>
      <Box1 count={count} user={user} />
    </>
  );
}

export default App;
