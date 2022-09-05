import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root") as Element); 

// const root = ReactDOM.createRoot(document.getElementById("root")!);
// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');
// const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>    
  </React.StrictMode>
);

