import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
