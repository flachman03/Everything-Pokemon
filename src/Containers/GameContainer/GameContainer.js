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
        {displayData}
      </section>
    )
  }
}

export default connect(null,null)(GameContainer)