import React from 'react'
import { connect } from 'react-redux'
import { GameCard } from '../../Components/GameCard/GameCard'
import './GameContainer.scss'

export class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { data } = this.props
    const displayData = data.map( version => {
      return <GameCard game={version} key={version.name}/>
    })
    return (
      <section>
        <h2>Find Your Favorite Pokemon Game</h2>
        <article className="game-display-article">
        {displayData}
        </article>
      </section>
    )
  }
}

export default connect(null,null)(GameContainer)