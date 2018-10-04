import axios from 'axios'

export const fetchUser = () => async dispatch => {
  dispatch({ type: 'FETCH_USER_PENDING'})
  try {
    const res = await axios.get('/api/current_user');
    dispatch({ type: 'FETCH_USER_FULFILLED', payload: res.data });
  } catch (err) {
    dispatch({ type: 'FETCH_USER_REJECTED'})
  }
  
};

export const fetchGithub = (user) => async dispatch => {
  dispatch({ type: 'FETCH_GITHUB_PENDING' })
  try {
    const githubUser = await axios.get(`https://api.github.com/user/${user.githubId}`)
    const res = await axios.get(githubUser.data.repos_url)
    dispatch({ type: 'FETCH_GITHUB_FULFILLED', payload: res.data})
  } catch (err) {
    dispatch({ type: 'FETCH_GITHUB_REJECTED' })
  }
}

export const fetchPosts = () => async dispatch => {
  const res = await axios.get('/api/posts')
  dispatch({ type: 'FETCH_POSTS', payload: res.data })
}

export const fetchPost = id => async dispatch => {
  const res = await axios.get(`/api/posts/${id}`)
  dispatch({ type: 'FETCH_POST', payload: res.data})
}

export const fetchFeaturedPosts = () => async dispatch => {
  const res = await axios.get(`/api/posts/featured`)
  dispatch({ type: 'FETCH_FEATURED', payload: res.data})
}

export const submitPost = (values, history) => async dispatch => {
  const res = await axios.post('/api/posts', values);
  history.push('/')
  dispatch({ type: 'FETCH_POST', payload: res.data });
};

export const fetchGitHub = path => async dispatch => {
  const res = await axios.get(`https://api.github.com/repos/${path}`)
  dispatch({ type: 'FETCH_GITHUB', payload: res.data})
}