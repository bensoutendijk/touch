import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { styles } from '../styles'

class NavBar extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Toolbar>
          <Typography variant="headline" color="inherit" className={classes.grow}>
            Touch
          </Typography>
          <Typography>
            <Button to='/posts'>Posts</Button>
          </Typography>
        </Toolbar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)