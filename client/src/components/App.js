import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import PostList from './Posts/PostList'
import PostShow from './Posts/PostShow'
import PostNew from './Posts/PostNew'
import HomePage from './HomePage'
import * as actions from '../actions'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles'
import styles from '../styles'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
          <div className={classes.layout}>
            <Router>
              <div>
                <NavBar />
                <main>
                  <Switch>
                    <Route path='/posts/new' component={PostNew} />
                    <Route exact path='/posts/:id' component={PostShow} />
                    <Route path='/posts' component={PostList} />
                    <Route path='/' component={HomePage} />
                  </Switch>
                </main>
              </div>
            </Router>
          </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(connect(null, actions)(App))