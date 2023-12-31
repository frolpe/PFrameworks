import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import app from './App.js';
import {connectDB} from './db.js';
//import reportWebVitals from './reportWebVitals';

connectDB();
app.listen(4000)
console.log('Server on port', 4000)

/** 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
