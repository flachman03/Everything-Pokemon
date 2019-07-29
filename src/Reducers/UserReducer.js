const user = {
  name: 'Ryan',
  currentLineup: [],
  pokedex: [],
  games: []
}

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {...state, currentLineup: [...state.currentLineup, action.data]};
    case 'ADD_POKEDEX':
      return {...state, pokedex: [...state.pokedex, action.data]}
    default: 
      return state;
  }
}