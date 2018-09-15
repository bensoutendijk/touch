import axios from 'axios'

export const fetchPosts = () => async dispatch => {
  const res = await axios.get('/api/posts')
  dispatch({ type: 'FETCH_POSTS', payload: res.data })
}