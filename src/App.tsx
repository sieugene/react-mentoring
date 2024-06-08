import { useEffect, useState } from "react";
import "./App.css";
import Store from "./store/store";

const store = new Store({
  count: 0,
});

function App() {
  const [state, setState] = useState(store.getState());
  const increment = () => {
    store.dispatch((state) => ({
      ...state,
      count: state.count + 1,
    }));
  };
  const decrement = () => {
    store.dispatch((state) => ({
      ...state,
      count: state.count - 1,
    }));
  };
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <>
      <h2>Counter</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <h2>Current: {state.count}</h2>
      <button
        onClick={() => {
          store.destroy();
        }}
      >
        kill store
      </button>
    </>
  );
}

export default App;
