import { getGamesThunk } from './gameThunks'
import { getMovesThunk } from './movesThunk'
import { getRegionsThunk } from './regionsThunk'

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
  })
})

