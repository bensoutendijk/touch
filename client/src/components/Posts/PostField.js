import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <Grid item className={input.name}>
      <Typography variant='title'>{label}</Typography>
      <TextField {...input} style={{ marginBottom: '5px' }} />
    </Grid>
  );
};