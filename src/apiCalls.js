export const getItemCategories = (offset) => {
  const url = `https://pokeapi.co/api/v2/item-category?offset=${offset}&limit=20`
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error.message)
}

export const getMoveCategories = (category) => {
  const url = `https://pokeapi.co/api/v2/${category}`
  return fetch(url)
    .then(response => response.json())
    .catch(error => error.message)
}