import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";
import "./index.scss"

const appRoot = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes/>
    </Router>
  </React.StrictMode>,
  appRoot
);
