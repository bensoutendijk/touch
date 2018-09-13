import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends React.Component {
  render() {
    
    console.log()
    
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Touch
          </Typography>
          <Typography variant="title" color="inherit">
            {this.props.location.pathname}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar