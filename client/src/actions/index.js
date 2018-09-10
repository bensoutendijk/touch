import axios from 'axios';

export const createUser = (user) => async dispatch => {
  const res = await axios.post('/auth', user);

  dispatch({ type: 'CREATE_USER', payload: res.data })
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: 'FETCH_USER', payload: res.data });
};