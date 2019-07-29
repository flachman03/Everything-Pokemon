export const moveReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVES':
      return action.data
    default:
      return state
  }
}