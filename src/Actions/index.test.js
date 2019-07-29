import { getPokemon, getItems, getMoves, getGames, getRegions, isLoading, hasErrored, addPokemon, addPokedex, resetErrored } from './index'

describe('Actions', () => {
  describe('getPokemon', () => {

    it('should return an object with type of GET_POKEMON', () => {
      const expected = {type: 'GET_POKEMON', data: undefined}
      const result = getPokemon()
      expect(result).toEqual(expected)
    })

    it('should take in a parameter and return an object with the data property set to argument', () => {
      const pokemon = [{name: 'charmander'}, {name: 'squirtle'}]
      const expected = {type: 'GET_POKEMON', data: pokemon}
      const result = getPokemon(pokemon)
      expect(result).toEqual(expected)
    })
  })

  describe('getItems', () => {

    it('should return an object with the type of GET_ITEMS', () => {
      const expected = {type: 'GET_ITEMS', data: undefined}
      const result = getItems()
      expect(result).toEqual(expected)
    })

    it('should take a parameter and return an object with the data property set to the argument', () => {
      const items = [{name: 'pokeball'}, {name: 'greatball'}]
      const expected = {type: 'GET_ITEMS', data: items}
      const result = getItems(items)
      expect(result).toEqual(expected)
    })
  })

  describe('getMoves', () => {

    it('should return an object with the type property of GET_MOVES', () => {
      const expected = {type: 'GET_MOVES', data: undefined}
      const result = getMoves()
      expect(result).toEqual(expected)
    })

    it('should to a parameter and return an object with the data property set the the argument', () => {
      const moves = [{name: 'ember'}, {name: 'wing attack'}]
      const expected = {type: 'GET_MOVES', data: moves}
      const result = getMoves(moves)
      expect(result).toEqual(expected)
    })
  })

  describe('getGames', () => {

    it('should return an object with the type of GET_GAMES', () => {
      const expected = {type: 'GET_GAMES', data: undefined}
      const result = getGames()
      expect(result).toEqual(expected)
    })

    it('should take in a parameter and set the data property to the argument', () => {
      const games = [{name: 'red'}, {name: 'blue'}]
      const expected = {type: 'GET_GAMES', data: games}
      const result = getGames(games)
      expect(result).toEqual(expected)
    })
  })

  describe('getRegions', () => {
    it('should return an object with the type of GET_REGIONS', () => {
      const expected = {type: 'GET_REGIONS', data: undefined}
      const result = getRegions()
      expect(result).toEqual(expected)
    })

    it('should have a parameter and set the data propterty the the argument', () => {
      const regions = [{name: 'kanto'}, {name: 'aloloa'}]
      const expected = {type: 'GET_REGIONS', data: regions}
      const result = getRegions(regions)
      expect(result).toEqual(expected)
    })
  })

  describe('isLoading', () => {
    it('should return an object with the type of IS_LOADING', () => {
      const expected = {type: 'IS_LOADING'}
      const result = isLoading()
      expect(result).toEqual(expected)
    })
  })

  describe('hasErrored', () => {

    it('should return an object the the type of HAS_ERRORED', () => {
      const expected = {type: 'HAS_ERRORED', error: undefined}
      const result = hasErrored()
      expect(result).toEqual(expected)
    })

    it('should have a parameter and return an object the the error property assigned to the argument', () => {
      const errorMsg = 'Error fetching pokemon'
      const expected = {type: 'HAS_ERRORED', error: errorMsg}
      const result = hasErrored(errorMsg)
      expect(result).toEqual(expected)
    })
  })

  describe('addPokemon', () => {

    it('should return an object with the type of ADD_POKEMON', () => {
      const expected = {type: 'ADD_POKEMON', data: undefined}
      const result = addPokemon()
      expect(result).toEqual(expected)
    })

    it('should have a parameter and return an object with the data property set to the argument', () => {
      const pokemon = {name: 'charmander'}
      const expected = {type: 'ADD_POKEMON', data: pokemon}
      const result = addPokemon(pokemon)
      expect(result).toEqual(expected)
    })
  })

  describe('addPokedex', () => {

    it('should return an object with the type of ADD_POKEDEX', () => {
      const expected = {type: 'ADD_POKEDEX', data: undefined}
      const result = addPokedex()
      expect(result).toEqual(expected)
    })

    it('should have a parameter and return an object with the data property set to the argument', () => {
      const pokemon = {name: 'charmander'}
      const expected = {type: 'ADD_POKEDEX', data: pokemon}
      const result = addPokedex(pokemon)
      expect(result).toEqual(expected)
    })
  })  

  describe('resetErrored', () => {
    it('should return an object with the type of RESET_ERROR and error of null', () => {
      const expected = {type: 'RESET_ERROR', error: null}
      const result = resetErrored()
      expect(result).toEqual(expected)
    })
  })
})