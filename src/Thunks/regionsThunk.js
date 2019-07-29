import { getRegions, hasErrored } from '../Actions/index'

export const getRegionsThunk = dispatch => {
  const url = 'https://pokeapi.co/api/v2/region'
  return async dispatch => {
    try {
      const response = await fetch(url)
      const regionBaseData = await response.json()
      const allRegionData = regionBaseData.results.map( async region => {
        const response = await fetch(region.url)
        const data = await response.json()
        return data
      })
      const regionData = await Promise.all(allRegionData)
      dispatch(getRegions(regionData))
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}