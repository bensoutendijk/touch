import React from 'react'
import SignupForm from './SignupForm'

class SignupPage extends React.Component {
  submit = values => {
    console.log(values);
  }
  render() {
    return <SignupForm onSubmit={this.submit} />
  }
}

export default SignupPage