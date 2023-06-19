import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const stackTrace = [];

function saveStackTrace() {
  const error = new Error();
  const stack = error.stack.split('\n').slice(2);
  
  stackTrace.push(...stack);
}

axios.interceptors.request.use((request) =>{
  console.trace = saveStackTrace;
  console.trace();
  console.log(stackTrace);
  
  return request;                                                                                                           
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
