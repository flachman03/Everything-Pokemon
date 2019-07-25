export const getPokemon = pokemon => ({
  type: 'GET_POKEMON',
  data: pokemon
})

export const getItems = items => ({
  type: 'GET_ITEMS',
  data: items
})

export const getMoves = moves => ({
  type: 'GET_MOVES',
  data: moves
})

export const getGames = games => ({
  type: 'GET_GAMES',
  data: games
})

export const getRegions = regions => ({
  type: 'GET_REGIONS',
  data: regions
})