import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Appslotgame from './Appslotgame';
import Clock from './Clock';
import Form from './form';
// import App from './app';
import Cards from './Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Form />
    <Cards/>
    <Clock />
  </>
);


