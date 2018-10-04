export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_PENDING':
      return { fetching: true, fetched: false, user: null, error: false }
    case 'FETCH_POSTS_FULFILLED':
      return { fetching: false, fetched: true, payload: action.payload, error: false };
    case 'FETCH_POSTS_REJECTED':
      return { fetching: false, fetched: false, user: null, error: true}
    default:
      return state;
  }
}
