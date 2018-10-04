export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_GITHUB_PENDING':
      return { fetching: true, fetched: false, repos: null, error: false }
    case 'FETCH_GITHUB_FULFILLED':
      return { fetching: false, fetched: true, repos: action.payload, error: false }
    case 'FETCH_GITHUB_REJECTED':
      return { fetching: false, fetched: false, repos: null, error: true }
    default:
      return state;
  }
}
