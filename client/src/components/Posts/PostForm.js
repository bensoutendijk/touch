import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import PostField from './PostField'
import formFields from './formFields';
import styles from '../../styles'
import Markdown from './Markdown';


class PostForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({ label, name, multiline }) => {
      return (
        <Field
          key={name}
          component={PostField}
          multiline={multiline}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  renderPreview() {
    const { formValues } = this.props
    if (formValues && formValues['body'] && formValues['title']) {
      return (
        <Markdown>
          {'# ' + formValues['title'] + '\n' + formValues['body']}
        </Markdown>
      )
    }
    if (formValues && formValues['title']) {
      return (
        <Markdown>
          {'# ' + formValues['title']}
        </Markdown>
      )
    }
    if (formValues && formValues['body']) {
      return (
        <Markdown>
          {'\n' + formValues['body']}
        </Markdown>
      )
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item md={6}>
          <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)} className={classes.postForm}>
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
        <Grid item md={6}>
          {this.renderPreview()}
        </Grid>
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

function mapStateToProps(state) {
  if (state.form.postForm) return { formValues: state.form.postForm.values };
}

export default connect(mapStateToProps)(withStyles(styles)(reduxForm({
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm)))