import mapKeys from 'lodash/mapKeys';

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, ...mapKeys(action.payload, '_id') }
    case 'FETCH_POST':
      const post = action.payload
      return { ...state, [post._id]: post }
    case 'FETCH_FEATURED':
      return { ...state, featured: mapKeys(action.payload, '_id') }
    default:
      return state;
  }
}
