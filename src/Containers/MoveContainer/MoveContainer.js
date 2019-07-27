import React from 'react'
import './MoveContainer.scss'
import { connect } from 'react-redux'
import { MoveCard } from '../../Components/MoveCard/MoveCard'

export class MoveContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      offset: 0,
      category: []
    }
  }

  render(){
    const { data } = this.props
    const displayMoves = data.map( move => {
      return <MoveCard move={move}/>
    })
    return (
      <setion className="moves-container">
        <article className="display-categories__section">
          <ul className="category-list__header">
            <button>Category</button>
            <button>Class</button>
            <button>Show All</button>
          </ul>
          <ul className="category-list">
            
          </ul>
        </article>
        <article className="display-moves__section">
          {displayMoves}
        </article>
      </setion>
    )
  }
}

export default connect(null,null)(MoveContainer)

