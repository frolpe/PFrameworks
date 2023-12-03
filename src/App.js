// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import skillRoutes from './routes/skills.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", skillRoutes);

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
