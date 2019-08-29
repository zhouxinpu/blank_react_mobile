import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/less/reset.less'
import { Provider } from 'react-redux'
import store from './store'
import User from './views/User'
import Goods from './views/Goods'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/goods" component={Goods} />
        <Redirect to="/user" />
      </Switch>
    </Router>
  </Provider>, document.querySelector('#root'))