import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Make sure this exists
import './App.css';    // Your main styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);