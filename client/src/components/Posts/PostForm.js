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
import Markdown from './Markdown';

const styles = theme => ({
  form:{
    display: 'flex',
    flexDirection: 'column'
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

  async componentDidMount() {
    await this.props.fetchUser()
    await this.props.fetchGithub(this.props.auth.user)
  }

  renderTextField = ({ input, label, meta: { error, touched } }, ...custom) => {
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
    if(formValues){
      const values = formValues.values
      if(!values) {
        return (
          <Select
            name={label}
            label={label}
            value={'None'}
            onChange={(event, index, value) => input.onChange(event.target.value)}
            children={children}
            {...custom}
          />
        )
      }
      return (
        <Select
          name={label}
          label={label}
          value={this.props.formValues.values.repo_name}
          onChange={(event, index, value) => input.onChange(event.target.value)}
          children={children}
          {...custom}
        />
      )
    }
    return ''
  }

  renderPreview() {
    const { classes, formValues } = this.props
    if(formValues){
      const values = formValues.values
      if (values && values['body'] && values['title']) {
        return (
          <Markdown className={classes.md}>
            {'# ' + values['title'] + '\n\n\n' + values['body']}
          </Markdown>
        )
      }
      if (values && values['title']) {
        return (
          <Markdown className={classes.md}>
            {'# ' + values['title']}
          </Markdown>
        )
      }
      if (values && values['body']) {
        return (
          <Markdown className={classes.md}>
            {'\n' + values['body']}
          </Markdown>
        )
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const { submitPost, history, formValues } = this.props;

    submitPost(formValues.values, history);
  }

  render() {
    const { classes, github, auth } = this.props;
    if (auth.error) return ''
    if (github.error) return ''
    if (!github.repos) return ''
    return (
      <Grid container spacing={16}>
        <Grid item sm={12} md={6} lg={6}>
          <form onSubmit={this.onSubmit.bind(this)} className={classes.form}>
            <Field 
              name="repo_name"
              component={this.renderSelectField}
              label="GitHub Repository"
            >
              <MenuItem value={'None'}>None</MenuItem>
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
            />
            <div className={classes.buttonContainer}>
              <Button to="/posts" component={Link} className={classes.button} color='secondary'>
                Cancel
              </Button>
              <Button type='submit' className={classes.button} color='primary'>
                Next
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          {this.renderPreview()}
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
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm))))