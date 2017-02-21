import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
// import App from './App';
import ResourcesContainer from './containers/ResourcesContainer';
import rootReducer from './reducers';
import { getAllSubjects } from './actions/index';
import './index.css';

const middleware = [thunk];
export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

store.dispatch(getAllSubjects())

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ResourcesContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
