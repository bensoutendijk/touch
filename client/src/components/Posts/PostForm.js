import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom';
import { reduxForm, Field, SelectField } from 'redux-form';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles'
import PostField from './PostField'
import formFields from './formFields';
import styles from '../../styles'
import Markdown from './Markdown';


class PostForm extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 0
  }

  async componentDidMount() {
    await this.props.fetchUser()
    this.props.fetchUserGithubRepos(this.props.user)
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
    console.log(this.state.selectedIndex)
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderFields() {
    const { anchorEl } = this.state
    return _.map(formFields, ({ label, name, multiline, placeholder }) => {
      if(label === 'GitHub Repository') {
        if(!this.props.github) return ''
        if(!this.props.github.length) return ''
        return (
          <div>
            <List component="nav">
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="repo-menu"
                aria-label={label}
                onClick={this.handleClickListItem}
              >
                  <ListItemText
                    primary={label}
                    secondary={this.props.github[this.state.selectedIndex].name}
                  />
                </ListItem>
            </List>
            <Menu
              id='repo-menu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              {_.map(this.props.github, ((repo, index) => (
                <MenuItem
                  key={repo.name}
                  selected={index === this.state.selectedIndex}
                  onClick={event=> this.handleMenuItemClick(event, index)}
                >
                  {repo.name}
                </MenuItem>
              )))}
            </Menu>
          </div>
        )
      }
      return (
        <Field
          key={name}
          component={PostField}
          multiline={multiline}
          type="text"
          label={label}
          name={name}
          placeholder={placeholder}
        />
      );
    });
  }
  renderPreview() {
    const { formValues } = this.props
    if(formValues){
      const values = formValues.values
      if (values && values['body'] && values['title']) {
        return (
          <Markdown>
            {'# ' + values['title'] + '\n' + values['body']}
          </Markdown>
        )
      }
      if (values && values['title']) {
        return (
          <Markdown>
            {'# ' + values['title']}
          </Markdown>
        )
      }
      if (values && values['body']) {
        return (
          <Markdown>
            {'\n' + values['body']}
          </Markdown>
        )
      }
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
  return {
    user: state.auth,
    formValues: state.form.postForm,
    github: state.github
   }
}

export default connect(mapStateToProps, actions)(withStyles(styles)(reduxForm({
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm)))