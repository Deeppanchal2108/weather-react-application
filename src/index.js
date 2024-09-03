import React from "react";
import ReactDom from 'react-dom';
import App from "./components/App";
import  ApiDataProvider  from "./components/ApiDataProvider";
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiDataProvider>
      <App />
      </ApiDataProvider>
    </React.StrictMode>
)
