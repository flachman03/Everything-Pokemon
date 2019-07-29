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

export const getPokemonByName = async name => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  catch (error) {
    return error.message
  }
}