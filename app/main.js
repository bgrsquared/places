/* global __DEVTOOLS__ */

// BASICS
require('react-bootstrap');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');

// CORE
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

require('./style/myStyle.scss');

import coreReducer from './reducers/coreReducer';

import App from './GUI/mainContainer';

// Configure routes like normal
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="places" component={App}/>
    </Route>
  </Router>
);

const reducer = combineReducers({
  app: coreReducer,
});

const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(reducer);

class Root extends Component {
  constructor() {
    super();
    this.state = {
      showDebug: false,
    };
  }

  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}


ReactDOM.render(<Root />, document.getElementById('app'));
