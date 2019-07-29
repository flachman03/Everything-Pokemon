import React from 'react'
import './GameCard.scss'

export const GameCard = ({ game }) => {
  return (
    <article className="game-card">
      <h2>{game.name}</h2>
    </article>
  )
}