import useFetch from "./customHooks/useFetch.js";
import useCounter from "./customHooks/useCounter.js";
import useToggle from "./customHooks/useToggle.js";
import useLogger from "./customHooks/useLogger.js";
import useLocalStorage from "./customHooks/useLocalStorage.js";
import "./styles.css";

function QuestionOne() {
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter(0);

  return (
    <>
      <h2>Question 1</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}

function QuestionTwo() {
  const { value, toggleValue } = useToggle(false);

  return (
    <>
      <h2>Question 2</h2>
      <h3>Current State: {value ? "True" : "False"}</h3>
      <button onClick={toggleValue}>Toggle</button>
    </>
  );
}

function QuestionThree() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h2>Question 3</h2>
      <h3>Data</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </>
  );
}

function QuestionFour() {
  const { value, setValue } = useLogger("");

  return (
    <>
      <h2>Question 4</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Current Value: {value}</p>
    </>
  );
}

function QuestionFive() {
  const { value, setValue } = useLocalStorage("inputValue", "");

  return (
    <>
      <h2>Question 5</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Stored value: {value}</p>
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>⚛️ customHooks playground</h1>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <QuestionFive />
    </div>
  );
}
