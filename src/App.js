// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

export default app;  //Exportar app después de inicializarlo. 

/** 
import {Signup} from './signup/signup';
// import {Signin} from './signin/signin';

function App() {
  return (
    <div className="App">
        {/* <Signin /> }
        <Signup />
    </div>
  );
}

export default App;*/
