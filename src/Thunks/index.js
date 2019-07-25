import {getPokemon, hasErrored, getItems} from '../Actions/index'

export const getPokeThunk = dispatch => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  return async dispatch => {
    try {
      const response = await fetch(url)
      const pokeData = await response.json()
      dispatch(getPokemon(pokeData))
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const getItemsThunk = dispatch => {
  const url = 'https://pokeapi.co/api/v2/item'
  return async dispatch => {
    try {
      const response = await fetch(url)
      const itemBaseData = await response.json()
      console.log(itemBaseData)
      const allItemData = itemBaseData.results.map( async item => {
        const response = await fetch(item.url)
        const data = await response.json()
        return data
      })
      const itemData = await Promise.all(allItemData)
      console.log(itemData)
      dispatch(getItems(itemData))
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}