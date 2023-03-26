import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('spacex-root') as HTMLElement
);
root.render(<App />);
