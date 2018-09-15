import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Toolbar>
          <Typography component={Link} to='/' variant="headline" color="inherit">
            Touch
          </Typography>
          <Typography>
            <Button component={Link} to='/posts'>Posts</Button>
          </Typography>
        </Toolbar>
      </div>
    )
  }
}

export default (NavBar)