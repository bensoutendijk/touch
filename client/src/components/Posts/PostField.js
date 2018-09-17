import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default ({ input, label, multiline, meta: { error, touched } }) => {
  return (
    <Grid item className={input.name}>
      <TextField 
        {...input} 
        label={label} 
        placeholder='default placeholder'
        multiline={multiline} 
        fullWidth 
      />
    </Grid>
  );
};