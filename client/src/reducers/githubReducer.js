export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER_GITHUB_REPOS':
      const github = action.payload
      return github || false
    default:
      return state;
  }
}
