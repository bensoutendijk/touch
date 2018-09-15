import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar'
import PostList from './Posts/PostList'
import PostShow from './Posts/PostShow'
import HomePage from './HomePage'
import * as actions from '../actions'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Router>
            <div>
              <NavBar />
              <main>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/posts' component={PostList} />
                <Route exact path='/posts/:post_id' component={PostShow} />
              </main>
            </div>
          </Router>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, actions)(App)