import React from 'react'
import './PokemonCard.scss'

export const PokemonCard = ({ pokemon }) => {
  return (
    <article className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card__image"/>
      <h2 className="card__title">{pokemon.name}</h2>

    </article>
  )
}