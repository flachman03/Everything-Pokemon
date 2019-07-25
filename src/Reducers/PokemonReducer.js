export const PokemonReducer = (state = [], action ) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return action.data
    default: 
      return state
  }
}