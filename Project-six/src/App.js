import { useEffect, useState, useRef } from 'react';
import './App.css';

const useMyHook = (cb, delay = 1000) => {
  const saveCB = useRef();

  useEffect(() => {
    saveCB.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveCB.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>contagem: {counter}</h1>
      <h1>delay:{delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default App;
