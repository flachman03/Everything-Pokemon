export const hasErrored = (state = null, action) => {
  switch (action.type) {
  case 'HAS_ERRORED':
    return `We're sorry, but there seems to have been an error ${action.error}`
  case 'RESET_ERROR':
    return action.error
  default:
    return state
  }
}