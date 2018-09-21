import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={'/auth/github'}>Login With GitHub</a>
          </li>
        );
      default:
        return [
          <li key="3" style={{ margin: '0 10px' }}>
            <Link to="/posts">My Blogs</Link>
          </li>,
          <li key="2">
            <a href={'/auth/logout'}>Logout</a>
          </li>
        ];
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