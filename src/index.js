import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
// import App from './App';
import ResourcesContainer from './containers/ResourcesContainer';
import rootReducer from './reducers'
import './index.css';

const store = createStore(rootReducer);
// temporarily changed the parent component to ResourcesContainer from App
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ResourcesContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
