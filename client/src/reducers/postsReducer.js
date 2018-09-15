import mapKeys from 'lodash/mapKeys';

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, ...mapKeys(action.payload, 'id') };
    case 'FETCH_POST':
      const post = action.payload
      return { ...state, [post.id]: post }
    default:
      return state;
  }
}
