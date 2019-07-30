import React from 'react'
import './PokemonCard.scss'
import { Link } from 'react-router-dom'

export const PokemonCard = ({ pokemon }) => {
  return (
    <>
    <Link to={`/pokedex/${pokemon.name}`} className="card">
    {/* // <div className="card"> */}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card__image"/>
      <h2 className="card__title">{pokemon.name}</h2>
    {/* // </div> */}
    </Link>
    </>
  )
}