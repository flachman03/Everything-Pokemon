import { getItemCategories, getMoveCategories } from './apiCalls'

describe('Api Calls', () => {
  let mockResponse;
  beforeEach(() => {
    mockResponse = {name: 'charmander'}

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve( {
        json: () => Promise.resolve(mockResponse)
      })
    })
  })
  describe('getItemCategories', () => {
    it('should be called with the correct params', () => {
      const expected = `https://pokeapi.co/api/v2/item-category?offset=0&limit=20`
      getItemCategories(0)
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('should return a parsed response', async () => {
      const result = await getItemCategories(0)
      expect(result).toEqual(mockResponse)
    })
  })

  describe('getMoveCategories', () => {
    it('should be called with the correct params', () => {
      const expected = `https://pokeapi.co/api/v2/move-category`
      getMoveCategories('move-category')
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
  })
})