import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// ReactDOM.render(<App/>,document.getElementById("root"));

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App name="Saeloun blog" />);