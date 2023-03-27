import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(
  document.getElementById('spacex-root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
