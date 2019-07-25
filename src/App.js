import React from 'react';
import './App.scss';
import PokeSprite from 'react-poke-sprites'
import logo from './Images/pokemon-logo-vector.png'
import { Route, NavLink, Switch } from 'react-router-dom'
import { CardContainer } from './Containers/CardContainer/CardContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemon: {}
    }
  }
  
  componentDidMount() {

  }

  render() {
    
    return (
      <main className="App">
        <header className="app__header">
          <button className="app-logo" />
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
          <Route exact path="/pokedex" />
          <Route exact path="/items" /> 
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

export default App;
