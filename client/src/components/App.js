import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SignupPage from './signup/SignupPage';
import LoginPage from './LoginPage';
import Header from './Header';
import Landing from './Landing';
import { BrowserRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
