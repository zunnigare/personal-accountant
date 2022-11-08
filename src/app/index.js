import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import App from './App';

//RootAPP
const root = ReactDOM.createRoot(document.getElementById("app"));
function Counter() {
  const [counter, setCounter] = useState(10);

  return (
    <div>
      <h1>contador: {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>
        SUMAR uno
      </button>
      <App />
    </div>

  )
}
root.render(
  <StrictMode>
    <Counter />
  </StrictMode>);
