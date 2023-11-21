import React, { useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);
  // const [isActive,setIsActive] = useState(false)
  let timer;
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
  };

  const handleStop = () => {
    clearTimeout(timer);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timer);
  };
  useEffect(() => {
    if (count) {
      timer = setTimeout(handleStart, 1500);
    }
  }, [count]);

  return (
    <div className="App">
      <h3>Time: {count} Seconds</h3>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}