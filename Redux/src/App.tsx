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
        {/* Counter */}
        <div className="p-4 mt-4 border-t">
          <h2 className="text-2xl font-bold mb-2">Counter</h2>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded mr-2 text-base"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2 text-base"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement
          </button>
          <h1 className="mt-2 mr-3 text-2xl font-bold">{count}</h1>
        </div>
      </div>
      <Box1 count={count} user={user} />
    </>
  );
}

export default App;
