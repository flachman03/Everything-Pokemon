import React from 'react'
import { connect } from 'react-redux'
import { RegionCard } from '../../Components/RegionCard/RegionCard'

export class RegionContainer extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { data } = this.props
    const displayData = data.map( region => {
      return <RegionCard region={region} />
    })
    return (
      <section>
        {displayData}
      </section>
    )
  }
}

export default connect(null, null)(RegionContainer)