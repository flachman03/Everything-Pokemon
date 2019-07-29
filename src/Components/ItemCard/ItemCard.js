import React from 'react'
import './ItemCard.scss'

export const ItemCard = ({item}) => {
  return (
    <article className="item-card">
      <img src={item.sprites.default} alt={item.name} className="item-card__image"/>
      <h1 className="item-card__name">{item.name}</h1>
    </article>
  )
}