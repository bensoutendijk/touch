import _ from 'lodash'
import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root:{
    paddingTop: theme.spacing.unit * 10,
    justifyContent: 'space-around'
  },
  form:{
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer:{
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button:{
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  md: {
    fontSize: 16,
    paddingTop: theme.spacing.unit * 5
  }
  
})

class PostForm extends React.Component {

  renderTextField = ({ input, label, meta: { error, touched }, ...custom }) => {
    return (
        <TextField
          name={label}
          label={label}
          {...input}
          {...custom}
        />
    );
  };

  renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom}) => {
    const { formValues } = this.props
    if (formValues && formValues.values && formValues.values.repo_name) {
      return (
        <Select
        name={label}
        label={label}
        value={formValues.values.repo_name}
        onChange={(event, index, value) => input.onChange(event.target.value)}
        children={children}
        {...custom}
        />
      )
    }
    return ''
  }

  onSubmit(event) {
    event.preventDefault();

    const { submitPost, history, formValues } = this.props;

    submitPost(formValues.values, history);
  }

  render() {
    const { classes, github } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item md={8}>
          <form onSubmit={this.onSubmit.bind(this)} className={classes.form}>
            <Field 
              name="repo_name"
              component={this.renderSelectField}
              label="GitHub Repository"
            >
              <MenuItem value={'None'}><em>None</em></MenuItem>
              {_.map(github.repos, (repo) => {
                return (
                  <MenuItem key={repo.name} value={repo.name}>{repo.name}</MenuItem>
                )
              })}
            </Field>
            <Field 
              name="title"
              component={this.renderTextField}
              label="Title"
            />
            <Field 
              name="body"
              component={this.renderTextField}
              label="Body"
              multiline={true}
              rows={50}
            />
            <div className={classes.buttonContainer}>
              <Button to="/posts" component={Link} className={classes.button} color='secondary'>
                Cancel
              </Button>
              <Button type='submit' className={classes.button} color='primary'>
                Save
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    )
  }
}

function validate(values) {
  const errors = {};
  return errors;
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    formValues: state.form.postForm,
    github: state.github
   }
}

export default withRouter(connect(mapStateToProps, actions)(withStyles(styles)(reduxForm({
  initialValues: {repo_name: 'None'},
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm))))