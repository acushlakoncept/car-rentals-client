import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Routes from './Routes';
import './App.scss';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
