import { useState } from "react";
import "./App.css";
import {
  ChevronDown,
  ChevronsDown,
  ChevronUp,
  ChevronsUp,
  Hash,
  RotateCcw,
} from "react-feather";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((current) => (current += 1));
  };

  const decrement = () => {
    if (count > 0) {
      setCount((current) => (current -= 1));
    }
  };

  const reset = () => {
    setCount((current) => (current = 0));
  };

  const random = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setCount((current) => (current = randomNumber));
  };

  const incrementBy10 = () => {
    setCount((current) => (current += 10));
  };

  const decrementBy10 = () => {

    if (count > 10) {
      setCount((current) => (current -= 10));
    }
  };

  return (
    <div className="container">
      <h3>Current value:</h3>
      <h1>{count}</h1>

      <div className="buttons">
        <button className="btn" onClick={increment}>
          <ChevronUp />
        </button>
        <button className="btn" onClick={incrementBy10}>
          <ChevronsUp />
        </button>
        <button className="btn" onClick={reset}>
          <RotateCcw />
        </button>
        <button className="btn" onClick={random}>
          <Hash />
        </button>
        <button className="btn" onClick={decrementBy10}>
          <ChevronsDown />
        </button>
        <button className="btn" onClick={decrement}>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
}

export default App;
