import React from 'react';
import ReactDOM from "react-dom/client";
import {StrictMode} from 'react';
import App from './App';

//RootAPP
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<StrictMode>
    <App />
  </StrictMode>);
