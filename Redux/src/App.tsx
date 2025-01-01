import { useState } from "react";

import Box1 from "./components/box1";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const user = {
    name: "Sindhu",
    age: 27,
  };

  return (
    <>
      <div className="p-8">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
      <Box1 count={count} user={user} />
    </>
  );
}

export default App;
