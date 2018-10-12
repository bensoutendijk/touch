import axios from 'axios'

export const fetchUser = () => async dispatch => {
  dispatch({ type: 'FETCH_USER_PENDING' })
  try {
    const res = await axios.get('/api/current_user');
    dispatch({ type: 'FETCH_USER_FULFILLED', payload: res.data });
  } catch (err) {
    dispatch({ type: 'FETCH_USER_REJECTED' })
  } 
}

export const fetchUserAndGithubRepos = () => async dispatch => {
  dispatch({ type: 'FETCH_USER_PENDING' })
  try {
    const userRes = await axios.get('/api/current_user');
    dispatch({ type: 'FETCH_USER_FULFILLED', payload: userRes.data });
    const user = userRes.data
    if (user) {
      dispatch({ type: 'FETCH_GITHUB_PENDING' })
      try {
        const githubUser = await axios.get(`https://api.github.com/user/${user.githubId}`)
        const githubRes = await axios.get(githubUser.data.repos_url)
        dispatch({ type: 'FETCH_GITHUB_FULFILLED', payload: githubRes.data})
      } catch (err) {
        dispatch({ type: 'FETCH_GITHUB_REJECTED' })
      }
    }
  } catch (err) {
    dispatch({ type: 'FETCH_USER_REJECTED' })
  }
}

export const fetchPosts = () => async dispatch => {
  dispatch({ type: 'FETCH_POSTS_PENDING' })
  try {
    const res = await axios.get('/api/posts');
    console.log(res.data)
    dispatch({ type: 'FETCH_POSTS_FULFILLED', payload: res.data });
  } catch (err) {
    dispatch({ type: 'FETCH_POSTS_REJECTED' })
  }
}

export const fetchPost = id => async dispatch => {
  const res = await axios.get(`/api/posts/${id}`)
  dispatch({ type: 'FETCH_POST', payload: res.data})
}

export const submitPost = (values, history) => async dispatch => {
  dispatch( { type: 'SUBMIT_POST_PENDING' })
  try {
    await axios.post('/api/posts', values);
    history.push('/')
    dispatch({ type: 'SUBMIT_POST_FULFILLED' })
  } catch (err) {
    dispatch({ type: 'SUBMIT_POST_REJECTED' })
  }
};