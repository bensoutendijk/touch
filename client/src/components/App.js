import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import PostList from './Posts/PostList'
import PostShow from './Posts/PostShow'
import PostNew from './Posts/PostNew'
import * as actions from '../actions'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles'
import styles from '../styles'
import RepoList from './RepoList';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUserAndGithubRepos()
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
                    <Route path='/' component={RepoList} />
                  </Switch>
                </main>
              </div>
            </Router>
          </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
   }
}

export default withStyles(styles)(connect(mapStateToProps, actions)(App))