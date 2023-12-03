// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/api", authRoutes);

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
