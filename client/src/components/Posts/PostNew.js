import React from 'react'
import { reduxForm } from 'redux-form';
import PostForm from './PostForm'

class PostNew extends React.Component {

  render() {
    return (
      <PostForm />
    );
  }
}

export default reduxForm({
  form: 'postForm'
})(PostNew);