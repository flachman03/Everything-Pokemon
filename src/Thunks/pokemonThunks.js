import {getPokemon, hasErrored, addPokemon, addPokedex, resetErrored } from '../Actions/index'

export const getPokeThunk = dispatch => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  return async dispatch => {
    try {
      const response = await fetch(url)
      const pokeBaseData = await response.json()
      const allPokeData = pokeBaseData.results.map( async poke => {
        const response = await fetch(poke.url)
        const data = await response.json()
        return data
      })
      const pokeData = await Promise.all(allPokeData)
      dispatch(getPokemon(pokeData))
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const getMorePokemonThunk = (offset, dispatch)  => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  return async dispatch => {
    try {
      const response = await fetch(url)
      const pokeBaseData = await response.json()
      const allPokeData = pokeBaseData.results.map( async pokemon => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        return data
      })
      const pokeData = await Promise.all(allPokeData)
      dispatch(getPokemon(pokeData))
    }
    catch (error){
      dispatch(hasErrored('finding your pokemon'))
    }
  }
}

export const addPokemonThunk = (name, action, dispatch) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
  return async dispatch => {
    try {
      const response = await fetch(url)
      const newPokemon = await response.json()
      if(action === 'add pokemon') {
        dispatch(addPokemon(newPokemon))
        dispatch(resetErrored(null))
      } else {
        dispatch(addPokedex(newPokemon))
        dispatch(resetErrored(null))
      }
    } catch (error) {
      dispatch(hasErrored('finding your pokemon'))
    }
  }
}
