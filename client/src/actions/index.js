import axios from 'axios'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const fetchUserGithubRepos = (user) => async dispatch => {
  const githubUser = await axios.get(`https://api.github.com/user/${user.githubId}`)
  const res = await axios.get(githubUser.data.repos_url)

  dispatch({ type: 'FETCH_USER_GITHUB_REPOS', payload: res.data})
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