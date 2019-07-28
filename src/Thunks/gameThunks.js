import { getGames, hasErrored } from '../Actions/index'

export const getGamesThunk = dispatch => {
  const url = 'https://pokeapi.co/api/v2/version-group'
  return async dispatch => {
    try {
      const response = await fetch(url)
      const gameBaseData = await response.json()
      const allGameData = gameBaseData.results.map( async game => {
        const response = await fetch(game.url)
        const data = await response.json()
        return data
      })
      const gamesData = await Promise.all(allGameData)
      dispatch(getGames(gamesData))
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}