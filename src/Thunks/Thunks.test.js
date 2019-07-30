import { getGamesThunk } from './gameThunks'
import { getMovesThunk } from './movesThunk'
import { getRegionsThunk } from './regionsThunk'
import { getPokeThunk, getMorePokemonThunk, addPokemonThunk } from './pokemonThunks'
import { getItemsThunk, getItemsbyCategory } from './itemThunks'

describe('All Thunks', () => {
  describe('getGamesthunk', () => {
    let mockResponse, mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = {results: [{name: 'red'}]}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch using the correct params', async () => {
      const url = 'https://pokeapi.co/api/v2/version-group'
      await getGamesThunk()(mockDispatch)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('should dispatch the getGames action', async () => {
      const mockAction = {type: 'GET_GAMES', data: [mockResponse]}
      await getGamesThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('getMovesThunk', () => {
    let mockResponse, mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = {results: [{name: 'quick attack'}]}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should be called with the corrent params', async () => {
      const url = 'https://pokeapi.co/api/v2/move'
      await getMovesThunk()(mockDispatch)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('should dispatch the get moves action', async () => {
      const mockAction = {type: 'GET_MOVES', data: [mockResponse]}
      await getMovesThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('getRegionsThunk', () => {
    let mockResponse, mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = {results: [{name: 'khoto'}]}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should be called with the correct params', async () => {
      const url = 'https://pokeapi.co/api/v2/region'
      await getRegionsThunk()(mockDispatch)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('should dispatch the getRegions action', async () => {
      const mockAction = {type: 'GET_REGIONS', data: [mockResponse]}
      await getRegionsThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('Pokemon Thunks', () => {
    let mockResponse, mockDispatch;
    beforeEach(() => {
      mockResponse = {results: [{name: 'charmander'}]}
      mockDispatch = jest.fn()
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('getPokeThunk should be called with the correct params', async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon'
      await getPokeThunk()(mockDispatch)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('getPokeThunk should dispatch the getPokemon action', async () => {
      const mockAction = {type: 'GET_POKEMON', data: [mockResponse]}
      await getPokeThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })

    it('getMorePokemonThunk should be called with the correct params', async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
      await getMorePokemonThunk(0)(mockDispatch)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('getMorePokemonThunk should dispatch the getPokemon action', async () => {
      const mockAction = {type: 'GET_POKEMON', data: [mockResponse]}
      await getMorePokemonThunk(0)(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })

    it('addPokemonThunk should be called with the correct params', async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/charmander/'
      await addPokemonThunk('charmander', 'add pokemon')(mockDispatch)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })

    it('addPokemonThunk should dispatch addPokemon action when action param is add pokemon', async () => {
      const mockAction = {type: 'ADD_POKEMON', data: mockResponse}
      await addPokemonThunk('charmander', 'add pokemon')(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })

    it('addPokemonThunk should dispatch addPokedex action when action param isnt add pokemon', async () => {
      const mockAction = {type: 'ADD_POKEDEX', data: mockResponse}
      await addPokemonThunk('charmander', 'add pokedex')(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('Item Thunks', () => {
    let mockResponse, mockDispatch;
    beforeEach(() => {
      mockResponse = {results: [{name: 'poke ball'}]}
      mockDispatch = jest.fn()
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('getItemsThunk should be called with the correct params', async () => {
      const url = 'https://pokeapi.co/api/v2/item'
      await getItemsThunk()(mockDispatch)
      expect(window.fetch).toHaveBeenCalledWith(url)
    })
  })
})

