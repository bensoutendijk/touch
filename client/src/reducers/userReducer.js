export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload || false;
    case 'CREATE_USER':
      if (action.payload.save === true)
        return action.payload.user
      return false
    default:
      return state;
  }
}
