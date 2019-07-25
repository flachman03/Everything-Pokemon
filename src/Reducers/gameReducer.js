export const gameReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_GAMES':
      return action.data
    default:
      return state
  }
}