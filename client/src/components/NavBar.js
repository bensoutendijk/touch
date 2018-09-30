import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  loginHandler = (e) => {
    this.props.history.push('/')
  }
  logoutHandler = (e) => {
    this.props.history.push('/')
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
            <Button><a href='/auth/github'>Login With GitHub</a></Button>
        );
      default:
        return (
          <div>
            <Button component={Link} to="/posts">My Blogs</Button>
            <Button><a href='/auth/logout'>Logout</a></Button>
          </div>
        )
    }
  }
  render() {
    return (
      <Toolbar>
        <Grid container justify='space-between'>
          <Typography component={Link} to='/' variant="headline">
            Touch
          </Typography>
          <Typography>
            {this.renderContent()}
          </Typography>
        </Grid>
      </Toolbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar)