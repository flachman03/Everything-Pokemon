import { getMoves, hasErrored } from '../Actions/index'

export const getMovesThunk = dispatch => {
  const url = 'https://pokeapi.co/api/v2/move'
  return async dispatch => {
    try {
      const response = await fetch(url)
      const moveBaseData = await response.json()
      const allMoveData = moveBaseData.results.map( async move => {
        const response = await fetch(move.url)
        const data = await response.json()
        return data
      })
      const moveData = await Promise.all(allMoveData)
      console.log(moveData)
      dispatch(getMoves(moveData))
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}