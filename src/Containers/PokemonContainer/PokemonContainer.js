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
    console.log(this.props)
  }
  
  handleNextPokemon = (offset) => {
    this.setState({offset: this.state.offset + offset})
    this.props.getMorePokemon(this.state.offset)
    console.log(this.state.offset)
  }

  handlePrevPokemon = (offset) => {
    this.setState({offset: this.state.offset - offset})
    this.props.getMorePokemon(this.state.offset)
  }

  render() {
    const { data } = this.props
    const   displayPokemon = data.map( pokemon => {
      return <PokemonCard pokemon={pokemon}/>
    })

    return (
      <section className="pokemon-section">
        <div className="pokemon__container">
          {displayPokemon}
        </div>
        <ul className="container__buttons">
          <button 
            className="poke-button"
            onClick={() => this.handlePrevPokemon(20)}
          >Previous</button>
          <button 
            className="poke-button"
            onClick={() => this.handleNextPokemon(20)}
          >Next</button>
        </ul>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getMorePokemon: (offset) => dispatch(getMorePokemonThunk(offset))
})

export default connect(null, mapDispatchToProps)(PokemonContainer);