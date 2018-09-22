import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './utils/registerServiceWorker'
import './assets/styles/core.css'
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
  <Switch>
      <Route component={App} />
  </Switch>
  </Router>
   , document.getElementById('root'))
registerServiceWorker()
