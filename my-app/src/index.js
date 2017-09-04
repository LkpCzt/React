require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
