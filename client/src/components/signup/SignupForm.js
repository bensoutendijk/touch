import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignupForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

SignupForm = reduxForm({
  form: 'signup'
})(SignupForm)

export default SignupForm