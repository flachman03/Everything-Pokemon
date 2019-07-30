import React from 'react'
import { connect } from 'react-redux'
import { addPokemonThunk } from '../../Thunks/pokemonThunks'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import './UserContainer.scss'

export class UserContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchType: '',
      name: '',
      error: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnClick = (name, e) => {
    e.preventDefault()
    if(this.props.user.currentLineup.length < 6 && this.state.searchType === 'lineup') {
      this.props.addPokemon(name, 'add pokemon')
      this.setState({name: '', error: ''})
    } else if (this.state.searchType === 'pokedex'){
      this.props.addPokemon(name, 'pokedex')
      this.setState({name: '', error: ''})
    } else {
      this.setState({error: 'You may only have 6 Pokemon in your lineup', name: ''})

    }
  }
  render() {
    const displayLineup = this.props.user.currentLineup.map( pokemon => {
      return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
    })
    const displayPokedex = this.props.user.pokedex.map( pokemon => {
      return <PokemonCard pokemon={pokemon} key={pokemon.name}/>
    })
    return (
      <section className="user-section">
        <h1 className="welcome-title">Welome to your Ultimate Pokemon Guide!</h1>
        <h2 className="welcome-intro">Search for your favorite pokemon and add them to your lineup or pokedex!</h2>
        {this.state.error !== '' && this.state.searchType === 'currentLineup' && <p>{this.state.error}</p>}
        {this.props.errorMsg !== null && <p>{this.props.errorMsg}</p>}
        <form>
          <input 
            type='text' 
            value={this.state.name} 
            name="name"
            onChange={ e => this.handleOnChange(e)}
            className='user-form__input'
            />
          <select 
          id="user-select"
          name="searchType"
          onChange={e => this.handleOnChange(e)}
          className="user-select__input"
          >
            <option>Choose type</option>
            <option value="lineup">Current Linup</option>
            <option value="pokedex">My Pokedex</option>
          </select>
          <button
            type="submit"
            className="user-submit-btn"
            onClick={(e) => this.handleOnClick(this.state.name, e) }
          >Add to Profile!</button>
        </form>
        <article className="user-info__container">
          <div className="lineup-container">
            <h3>Current Lineup</h3>
              {displayLineup}
          </div>
          <div className="pokedex-container">
            <h3>My Pokedex</h3>
            <ul>
              {displayPokedex}
            </ul>
          </div>
        </article>
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  user: store.user,
  errorMsg: store.error,
})

export const mapDispatchToProps = dispatch => ({
  addPokemon: (pokemon, action) => dispatch(addPokemonThunk(pokemon, action))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)