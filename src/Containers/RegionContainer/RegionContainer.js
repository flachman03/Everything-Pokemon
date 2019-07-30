import React from 'react'
import { connect } from 'react-redux'
import { RegionCard } from '../../Components/RegionCard/RegionCard'
import './RegionContainer.scss'

export class RegionContainer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { data } = this.props
    const displayData = data.map( region => {
      return <RegionCard region={region} />
    })
    return (
      <section>
        <h1>Find your Region!</h1>
        <ul className="region-list">
        {displayData}
        </ul>
      </section>
    )
  }
}

export default connect(null, null)(RegionContainer)