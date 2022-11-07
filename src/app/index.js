import React from 'react';
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import App from './App';

//RootAPP
const root = ReactDOM.createRoot(document.getElementById("app"));
function Counter() {
  let counter = 10
  return(
      <div>
      <h1>contador: {counter}</h1>
      <button>
          sumar
      </button>
      </div>
  )
}
root.render(<StrictMode>
  <Counter />
</StrictMode>);
