import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <Toolbar>
        <Grid container justify='space-between'>
          <Typography component={Link} to='/' variant="headline">
            Touch
          </Typography>
          <Typography>
            <Button component={Link} to='/posts' >Posts</Button>
          </Typography>
        </Grid>
      </Toolbar>
    )
  }
}

export default (NavBar)