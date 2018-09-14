import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
class NavBar extends React.Component {
  render() {
    
    console.log()
    
    return (
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Touch
        </Typography>
        <Typography variant="title" color="inherit">
          {this.props.location.pathname}
        </Typography>
        <Typography>
          <Link to='/posts'>Posts</Link>
        </Typography>
      </Toolbar>
    )
  }
}

export default NavBar