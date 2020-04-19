import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Login />,
  document.getElementById('root')
);

serviceWorker.unregister();
