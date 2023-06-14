import { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mainContainer">
      <h1>Counter App</h1>
      <div className="counterContainer">
        <button className="incbtn" onClick={() => setCount((p) => p + 1)}>
          INCREMENT
        </button>
        <h4>{count}</h4>
        <button className="decbtn" onClick={() => setCount((p) => p - 1)}>
          DECREMENT
        </button>
      </div>
    </div>
  );
};

export default App;
