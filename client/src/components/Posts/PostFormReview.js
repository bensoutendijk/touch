import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class PostFormReview extends Component {
  renderFields() {
    const { formValues } = this.props;

    return _.map(formFields, ({ name, label }) => {
      return (
        <Grid item key={name}>
          <Typography variant='title'>{label}</Typography>
          <Typography variant='body1'>{formValues[name]}</Typography>
        </Grid>
      );
    });
  }

  renderButtons() {
    const { onCancel } = this.props;
    return (
      <div>
        <Button
          variant='contained'
          color='secondary'
          onClick={onCancel}
        >
          Back
        </Button>
        <Button type='submit' color='primary' variant='contained'>
          Save Post
        </Button>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();

    const { submitPost, history, formValues } = this.props;

    submitPost(formValues, history);
  }

  render() {
    return (
      <Grid container spacing={24}>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Typography variant='subheading'>Preview</Typography>
          {this.renderFields()}
          {this.renderButtons()}
        </form>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.postForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(PostFormReview))
