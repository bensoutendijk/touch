import axios from 'axios'

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