import React from 'react';
import './App.scss';
import PokeSprite from 'react-poke-sprites'
// import logo from './Images/pokemon-logo-vector.png'
import { Route, NavLink, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPokeThunk } from './Thunks/pokemonThunks'
import { getItemsThunk } from './Thunks/itemThunks'
import { getMovesThunk } from './Thunks/movesThunk'
import { getRegionsThunk } from './Thunks/regionsThunk'
import { getGamesThunk } from './Thunks/gameThunks'
import { PokemonContainer } from './Containers/PokemonContainer/PokemonContainer'
import { ItemContainer } from './Containers/ItemContainer/ItemContainer' 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemon: {}
    }
  }

  componentDidMount() {
    this.props.getPokemon()
    this.props.getItems()
    this.props.getMoves()
    this.props.getRegions()
    this.props.getGames()
  }

  render() {
    return (
      <main className="App">
        <header className="app__header">
          <div className="title-styling">
          <PokeSprite
            pokemon={'pikachu'}
            className="animated-sprites"
          />
          <PokeSprite
            pokemon={'squirtle'}
            className="animated-sprites"
          />
          <button className="app-logo" />
          <PokeSprite
            pokemon={'charmander'}
            className="animated-sprites"
          />
          <PokeSprite
            pokemon={'bulbasaur'}
            className="animated-sprites"
          />
          </div>
          <ul className='header__nav'>
            <NavLink to="/" className='nav__home'>Home</NavLink>
            <NavLink to="/pokedex" className='nav__pokedex'>Pokedex</NavLink>
            <NavLink to="/items" className='nav__items'>Items</NavLink>
            <NavLink to="/moves" className='nav__moves'>Moves</NavLink>
            <NavLink to="/regions" className='Nav__regions'>Regions</NavLink>
            <NavLink to="/games" className='nav__games'>Games</NavLink>
          </ul>
        </header>
        <Switch>
          <Route exact path="/"/>
          <Route exact path="/pokedex" render={() => (
            <PokemonContainer data={this.props.pokemon}/>
          )}/>
          <Route exact path="/items" render={() => (
            <ItemContainer data={this.props.items} />
          )}/> 
          <Route exact path="/moves" />
          <Route exact path="/regions" />
          <Route exact path="/games" />
          <Route render={() => (
            <>
            <h1>Error: 404</h1>
            <h1>Sorry, this page does not exist</h1>
            </>
          )}/>
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch => ({
  getPokemon: () => dispatch(getPokeThunk()),
  getItems: () => dispatch(getItemsThunk()),
  getMoves: () => dispatch(getMovesThunk()),
  getRegions: () => dispatch(getRegionsThunk()),
  getGames: () => dispatch(getGamesThunk())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
