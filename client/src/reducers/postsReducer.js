import mapKeys from 'lodash/mapKeys';

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, ...action.payload }
    case 'FETCH_POST':
      const post = action.payload
      return { ...state, [post.id]: post }
    case 'FETCH_FEATURED':
      console.log(action.payload)
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
