import React from 'react'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import './PokemonContainer.scss'

export const PokemonContainer = ({ data }) => {
  console.log(data)
  const displayPokemon = data.map( pokemon => {
    return <PokemonCard pokemon={pokemon}/>
  })

  return (
    <div className="pokemon__container">
      {displayPokemon}
    </div>
  )
}