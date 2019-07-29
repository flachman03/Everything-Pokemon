import React from 'react'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import './PokemonContainer.scss'
import { connect } from 'react-redux'
import { getMorePokemonThunk } from '../../Thunks/pokemonThunks'

export class PokemonContainer extends React.Component {
  constructor() {
    super();
    this.state = { 
      offset: 0,
    }
  }

  componentDidMount() {
  }
  
  async handleNextPokemon(offset) {
    await this.setState({offset: Math.min(this.state.offset + offset, 960)})
    this.props.getMorePokemon(this.state.offset)
  }

  async handlePrevPokemon(offset) {
    await this.setState({offset: Math.max(this.state.offset - offset, 0)})
    this.props.getMorePokemon(this.state.offset)
  }

  render() {
    const { data } = this.props
    const   displayPokemon = data.map( pokemon => {
      return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
    })

    return (
      <section className="pokemon-section">
        <div className="pokemon__container">
          {displayPokemon}
        </div>
        <ul className="container__buttons">
          {this.state.offset !== 0 && <button 
            className="poke-button"
            onClick={() => this.handlePrevPokemon(20)}
          >Previous</button>}
          {this.state.offset !== 960 && <button 
            className="poke-button"
            onClick={() => this.handleNextPokemon(20)}
          >Next</button>}
        </ul>
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  getMorePokemon: (offset) => dispatch(getMorePokemonThunk(offset))
})

export default connect(null, mapDispatchToProps)(PokemonContainer);