import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {NextUIProvider} from "@nextui-org/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="w-screen min-h-screen h-full  sm:p-0 flex items-start justify-center">
        <App />
      </div>  
    </NextUIProvider>
  </React.StrictMode>
);