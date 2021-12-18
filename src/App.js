/* eslint react-hooks/exhaustive-deps: off */
//eslintの特定のエラー検知を無効化できる
import React, { useEffect } from "react";
import { useState } from "react";

const INITIAL_COUNT = 0;

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const callbackFunction = () => {
    document.title = `${count}回クリックされました`;
  };

  useEffect(callbackFunction, [count]);
  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  return (
    <div className="App">
      <p>現在のカウント数: {count}</p>
    </div>
  );
};

export default function App() {
  return <SampleComponent />;
}
