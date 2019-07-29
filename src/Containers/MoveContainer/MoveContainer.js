import React from 'react'
import './MoveContainer.scss'
import { connect } from 'react-redux'
import { MoveCard } from '../../Components/MoveCard/MoveCard'
import { getMoveCategories } from '../../apiCalls'

export class MoveContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      offset: 0,
      category: []
    }
  }

  componentDidMount() {
    getMoveCategories('move-category')
      .then(response => this.setState({category: response.results}))
  }

  render(){
    const { data } = this.props
    const displayMoves = data.map( move => {
      return <MoveCard move={move}/>
    })
    const displayCategory = this.state.category.map( category => {
      return <button className="move-category-button">{category.name}</button>
    })
    return (
      <section className="moves-container">
        <article className="display-categories__section">
          <ul className="category-list__header">
            <button>Category</button>
            <button>Class</button>
            <button>Show All</button>
          </ul>
          <ul className="move-category-list">
            {displayCategory}
          </ul>
        </article>
        <article className="display-moves__section">
          {displayMoves}
        </article>
      </section>
    )
  }
}

export default connect(null,null)(MoveContainer)

