import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import postsReducer from './postsReducer'
import githubReducer from './githubReducer'
import authReducer from './authReducer'

export default combineReducers({
  form: reduxForm,
  posts: postsReducer,
  github: githubReducer,
  auth: authReducer
});
