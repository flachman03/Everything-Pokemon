import { gameReducer } from './gameReducer'
import { hasErrored } from './hasErrored'
import { isLoading } from './isLoading'
import { itemReducer } from './itemReducer'
import { moveReducer } from './moveReducer'
import { pokemonReducer } from './PokemonReducer'
import { regionReducer } from './regionReducer'
import { userReducer } from './UserReducer'


describe('All Reducers', () => {
  describe('gameReducer', () => {

    it('should have a default state of an empty array', () => {
      const expected = []
      const result = gameReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return the data from the action when type is GET_GAMES', () => {
      const mockAction = {type: 'GET_GAMES', data: 'mockData'}
      const expected = 'mockData'
      const result = gameReducer([], mockAction)
      expect(result).toEqual(expected)
    })
  })

  describe('hasErrored', () => {
    it('should return the default state of null', () => {
      const expected = null;
      const result = hasErrored(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a statement along with the error message', () => {
      const mockAction = {type: 'HAS_ERRORED', error: 'finding your pokemon'}
      const expected = `We're sorry, but there seems to have been an error finding your pokemon`
      const result = hasErrored(null, mockAction)
      expect(result).toEqual(expected)
    })
  })

  describe('isLoading', () => {

    it('should return a default state of false', () => {
      const expected = false;
      const result = isLoading(undefined, {})
      expect(result).toEqual(expected)
    })
    it('should toggle between true and false when type IS_LOADING', () => {
      const mockAction = {type: 'IS_LOADING'}
      const expected = true
      const result = isLoading(false, mockAction)
      expect(result).toEqual(expected)
      const expected2 = false 
      const result2 = isLoading(true, mockAction)
      expect(result2).toEqual(expected2)
    })
  })

  describe('itemReducer', () => {

    it('should return a default state of and empty array', () => {
      const expected = []
      const result = itemReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return the action data when GET_ITEMS is the type', () => {
      const mockAction = {type: 'GET_ITEMS', data: 'mockData'}
      const expected = 'mockData'
      const result = itemReducer([], mockAction)
      expect(result).toEqual(expected)
    })
  })

  describe('moveReducer', () => {

    it('should return the default state of an empty array', () => {
      const expected = []
      const result = moveReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return the action data when the type is GET_MOVES', () => {
      const mockAction = {type: 'GET_MOVES', data: 'mock data'}
      const expected = 'mock data'
      const result = moveReducer([], mockAction)
      expect(result).toEqual(expected)
    })
  })

  describe('pokemonReducer', () => {

    it('should return a default state of an empty array', () => {
      const expected = []
      const result = pokemonReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return the action data with the type is GET_POKEMON', () => {
      const mockAction = {type: 'GET_POKEMON', data: 'mock data'}
      const expected = 'mock data'
      const result = pokemonReducer([], mockAction)
      expect(result).toEqual(expected)
    })
  })

  describe('regionReducer', () => {

    it('should return the default state of an empty array', () => {
      const expected = []
      const result = regionReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return the action data with the type GET_REGIONS', () => {
      const mockAction = {type: 'GET_REGIONS', data: 'mock data'}
      const expected = 'mock data'
      const result = regionReducer([], mockAction)
      expect(result).toEqual(expected)
    })
  })

  describe('userReducer', () => {
    let user;
    beforeEach(() => {
      user = {
        name: 'Ryan',
        currentLineup: [],
        pokedex: [],
        games: []
      }
    })
    it('should return the default state of the user object', () => {
      const expected = user 
      const result = userReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should add the action data to the users currentLineup with type of ADD_POKEMON', () => {
      const mockData = {name: 'charmander'}
      const mockAction = {type: 'ADD_POKEMON', data: mockData}
      const expected = {
        name: 'Ryan',
        currentLineup: [{name: 'charmander'}],
        pokedex: [],
        games: []
      }
      const result = userReducer(user, mockAction)
      expect(result).toEqual(expected)
    })

    it('should add the action data to the pokedex array with the type of ADD_POKEDEX', () => {
      const mockData = {name: 'charmander'}
      const mockAction = {type: 'ADD_POKEDEX', data: mockData}
      const expected = {
        name: 'Ryan',
        currentLineup: [],
        pokedex: [{name: 'charmander'}],
        games: []
      }
      const result = userReducer(user, mockAction)
      expect(result).toEqual(expected)
    })
  })
})
