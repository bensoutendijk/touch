import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import PostsPage from './Posts/PostsPage'
import ShowPost from './Posts/ShowPost'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={NavBar} />
          <Route exact path='/posts' component={PostsPage} />
          <Route path='/posts/:post_id' component={ShowPost} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.current_user
  }
}

export default connect(mapStateToProps)(App)