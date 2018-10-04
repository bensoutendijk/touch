import mapKeys from 'lodash/mapKeys';

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, ...mapKeys(action.payload, '_id') }
    default:
      return state;
  }
}
