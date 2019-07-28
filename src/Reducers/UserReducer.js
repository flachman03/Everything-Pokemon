const user = {
  name: 'Ryan',
  currentLineup: [],
  pokedex: [],
  games: []
}

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case 'ADD_LINUP':
      return {...state, currentLineup: action.lineup};
    default: 
      return state;
  }
}