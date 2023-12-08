// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import skillRoutes from './routes/skills.routes.js';
import projectRoutes from './routes/projects.routes.js';
import expRoutes from './routes/experience.routes.js';
import studyRoutes from './routes/study.routes.js';
import userRoutes from './routes/user.routes.js'
 
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", skillRoutes);
app.use("/api", projectRoutes);
app.use("/api", expRoutes);
app.use("/api", studyRoutes);
app.use("/api", userRoutes);



export   default app;  //Exportar app después de inicializarlo. 

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
