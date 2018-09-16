import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import PostField from './PostField'
import formFields from './formFields';


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
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
          {this.renderFields()}
          <Link to="/posts" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
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

export default reduxForm({
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm);