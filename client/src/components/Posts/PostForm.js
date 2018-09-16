import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import PostField from './PostField'
import formFields from './formFields';
import styles from '../../styles'


class PostForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={PostField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
          {this.renderFields()}
          <div className={classes.buttons}>
            <Button to="/posts" component={Link} className={classes.button} color='secondary'>
              Cancel
            </Button>
            <Button type='submit' className={classes.button} color='primary'>
              Next
            </Button>
          </div>
        </form>
      </Grid>
    )
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default withStyles(styles)(reduxForm({
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm))