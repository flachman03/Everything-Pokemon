export const regionReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_REGIONS':
      return action.data
    default:
      return state
  }
}