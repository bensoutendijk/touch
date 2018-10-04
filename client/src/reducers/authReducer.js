export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return { fetching: true, fetched: false, user: null, error: false }
    case 'FETCH_USER_FULFILLED':
      return { fetching: false, fetched: true, user: action.payload, error: false };
    case 'FETCH_USER_REJECTED':
      return { fetching: false, fetched: false, user: null, error: true}
    default:
      return state;
  }
}
