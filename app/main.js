/* global __DEVTOOLS__ */

// BASICS
require('react-bootstrap');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

// CORE
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { Route } from 'react-router';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import thunkMiddleware from 'redux-thunk';

require('./style/myStyle.scss');

import coreReducer from './reducers/coreReducer';

import App from './GUI/mainContainer';

// Configure routes like normal
const routes = (
  <Route path="/" component={App}>
    <Route path="placeNames" component={App}/>
    <Route path="placeNamesExp" component={App}/>
  </Route>
);

const reducer = combineReducers({
  router: routerStateReducer,
  app: coreReducer,
});

// Compose reduxReactRouter with other store enhancers
const store = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({
    routes,
    createHistory,
  }),
  devTools()
)(createStore)(reducer);

class Root extends Component {
  constructor() {
    super();
    this.state = {
      showDebug: false,
    };
  }

  render() {
    const { showDebug } = this.state;
    const debug = [];
    const debugButton = [];
    if (__DEVTOOLS__) {
      debugButton.push(<Button
        bsSize={'small'}
        bsStyle={'danger'}
        key={'dbgBtn'}
        onClick={() => {this.setState({ showDebug: !showDebug }); }}
      >Redux Debug (dev mode)
      </Button>);
      debugButton.push(<hr key={'hr'}/>);
      if (showDebug) {
        debug.push(
          <DebugPanel bottom right top key={'dbgPnl'}>
            <DevTools monitor={LogMonitor} store={store}/>
          </DebugPanel>
        );
      }
    }

    return (
      <div>
        {debugButton}
        <h1>Experimental Branch! Please go to bgrsquared.com/placeNames for stable</h1>
        <Provider store={store}>
          <ReduxRouter />
        </Provider>
        {debug}
      </div>
    );
  }
}


ReactDOM.render(<Root />, document.getElementById('app'));

// Elsewhere, in a component module...
/*
 import { connect } from 'react-redux';
 import { pushState } from 'redux-router';

 connect(
 state => ({ q: state.router.location.query.q }),

 { pushState }
 )(SearchBox);
 */
