import React from 'react'
import './PokemonCard.scss'
import { NavLink } from 'react-router-dom'

export const PokemonCard = ({ pokemon }) => {
  return (
    <NavLink to={`/pokedex/${pokemon.name}`} className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card__image"/>
      <h2 className="card__title">{pokemon.name}</h2>

    </NavLink>
  )
}