import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles'
import { styles } from '../styles'
import NavBar from './NavBar'
import PostsPage from './Posts/PostsPage'
import ShowPost from './Posts/ShowPost'

class App extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <NavBar />
            <Router>
              <main>
                <Route exact path='/posts' component={PostsPage} />
                <Route path='/posts/:post_id' component={ShowPost} />
              </main>
            </Router>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.current_user
  }
}

export default withStyles(styles)(connect(mapStateToProps)(App))