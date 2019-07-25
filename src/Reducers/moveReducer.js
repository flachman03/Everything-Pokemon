export const moveReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.data
    default:
      return state
  }
}