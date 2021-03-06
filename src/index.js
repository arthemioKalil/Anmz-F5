import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
