import React from 'react'
import { getPokemonByName } from '../../apiCalls'

export class ExpandedPokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    } 
  }

  componentDidMount() {
    getPokemonByName(this.props.pokemon)
      .then(data => this.setState({pokemon: data}))
  }
  render() {
    console.log(this.state.pokemon)
    return (
      <article>
        <h2>{this.state.pokemon.name}</h2>
      </article>
    )
  }
}