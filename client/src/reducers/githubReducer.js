export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_GITHUB':
      const github = action.payload
      return {...state, github }
    default:
      return state;
  }
}
