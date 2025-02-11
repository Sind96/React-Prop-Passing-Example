import { useState } from "react";
import Box1 from "./components/Box1.js";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const user = {
    name,
    age: age ? parseInt(age, 10) : 0,
  };

  return (
    <>
      <div className="px-4">
        <h1 className="text-3xl font-bold mb-4">React Prop Passing Example</h1>

        <h2 className="text-2xl font-bold mb-3">User Info</h2>
        <div className="mb-6">
          <label
            className="block mb-2 text-base font-semibold"
            htmlFor="name"
          ></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border p-2 rounded w-full mb-4"
          ></input>
          <label
            className="block mb-2 text-base font-semibold"
            htmlFor="age"
          ></label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="border p-2 rounded w-full"
          ></input>
        </div>
        <div className="border-t pt-2 mb-5 border-b">
          <h2 className="text-xl font-bold my-4">Counter</h2>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded mr-2"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement
          </button>
          <h1 className="my-4 text-lg">Count: {count}</h1>
        </div>
        <Box1 count={count} user={user} />
      </div>
    </>
  );
};

export default App;
