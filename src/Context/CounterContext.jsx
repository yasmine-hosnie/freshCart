import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export let CounterContext = createContext(0);

export default function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  function changeCount() {
    setCount(Math.random());
  }
  return (
    <>
      <CounterContext.Provider value={{ count, setCount, changeCount }}>
        {children}
      </CounterContext.Provider>
    </>
  );
}
