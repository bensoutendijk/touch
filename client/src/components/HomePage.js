import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class HomePage extends React.Component {
  render() {
    return (
      
      <Paper>
        <Grid container>
          <Grid item md={8}>
            HomePage
          </Grid>
        </Grid>
      </Paper>
      
    )
  }
}

export default HomePage