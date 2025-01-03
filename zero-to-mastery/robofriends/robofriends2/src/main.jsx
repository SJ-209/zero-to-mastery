import React from 'react';
// import ReactDom form 'react-dom'; The new way to import createRoot:
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';

import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
