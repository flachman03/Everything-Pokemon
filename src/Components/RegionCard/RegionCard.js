import React from 'react'
import './RegionCard.scss'

export const RegionCard = ({region}) => {

  return (
    <button className="region-card__button">{region.name}</button>
  )
}
