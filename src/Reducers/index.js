import { combineReducers } from 'redux'
import { pokemonReducer } from './PokemonReducer'
import { itemReducer } from './itemReducer'
import { moveReducer } from './moveReducer'
import { regionReducer } from './regionReducer'
import { gameReducer } from './gameReducer'
import { hasErrored } from './hasErrored'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemReducer,
  moves: moveReducer,
  regions: regionReducer,
  games: gameReducer,
  error: hasErrored
})

export default rootReducer