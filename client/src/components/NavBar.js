import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const styles = {
  link: {
    color: 'black',
    textDecoration: 'none'
  }
}

class NavBar extends React.Component {

  loginHandler = (e) => {
    this.props.history.push('/')
  }
  logoutHandler = (e) => {
    this.props.history.push('/')
  }

  renderContent() {
    const { classes } = this.props
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
            <Button><a className={classes.link} href='/auth/github'>Login With GitHub</a></Button>
        );
      default:
        return (
          <div>
            <Button component={Link} to="/posts/new">Write</Button>
            <Button><a className={classes.link} href='/auth/logout'>Logout</a></Button>
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
            {this.renderContent()}
        </Grid>
      </Toolbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)((NavBar)))