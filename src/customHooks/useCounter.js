import { useState } from "react";

export default function useCounter(init) {
  const [counter, setCounter] = useState(init);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  function resetCounter() {
    setCounter(init);
  }

  return { counter, incrementCounter, decrementCounter, resetCounter };
}
