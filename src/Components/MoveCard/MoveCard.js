import React from 'react'
import './MoveCard.scss'

export const MoveCard = ({move}) => {
  return (
    <article className="move-card">
      <h2 className="move-card__name">{move.name}</h2>
      <p className="move-card__type">{move.type.name}</p>
    </article>
  )
}