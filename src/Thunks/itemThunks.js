import { hasErrored, getItems } from '../Actions'

export const getItemsThunk = dispatch => {
  const url = 'https://pokeapi.co/api/v2/item'
  return async dispatch => {
    try {
      const response = await fetch(url)
      const itemBaseData = await response.json()
      const allItemData = itemBaseData.results.map( async item => {
        const response = await fetch(item.url)
        const data = await response.json()
        return data
      })
      const itemData = await Promise.all(allItemData)
      dispatch(getItems(itemData))
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const getItemsByCategory = (id, dispatch) => {
  const url = `https://pokeapi.co/api/v2/item-category/${id}`
  return async dispatch => {
    try {
      const response = await fetch(url)
      const baseCategoryData = await response.json()
      const allCategoryData = baseCategoryData.results.map( async category => {
        const response = await fetch(category.url)
        const data = await response.json()
        return data
      })
      const categoryData = await Promise.all(allCategoryData)
      dispatch(getItems(categoryData))
    }
    catch(error) {
      dispatch(hasErrored(error.message))
    }
  }
}