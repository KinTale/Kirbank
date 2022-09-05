import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root") as Element); 

// const root = ReactDOM.createRoot(document.getElementById("root")!);
// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');
// const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

