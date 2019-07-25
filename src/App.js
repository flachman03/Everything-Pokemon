import React from 'react';
import './App.scss';
import PokeSprite from 'react-poke-sprites'
import logo from './Images/pokemon-logo-vector.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPokemon: {}
    }
  }
  async componentDidMount() {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon/'
      const response = await fetch(url)
      const data = await response.json()
      this.setState({currentPokemon: data})
    }
    catch {
      console.log('error')
    }
  }

  render() {
    
    return (
      <main className="App">
        <header className="app__header">
          {/* <h1 className=""><img src="/static/media/pokemon-logo-vector.29d6e9ae.png" 
            alt="logo"
            className="app-logo"/></h1> */}
            <button className="app-logo" />
          <ul className='header__nav'>
            <li className='nav__home'>Home</li>
            <li className='nav__pokedex'>Pokedex</li>
            <li className='nav__items'>Items</li>
            <li className='nav__moves'>Moves</li>
            <li className='Nav__regions'>Regions</li>
            <li className='nav__games'>Games</li>
          </ul>
        </header>
        <section className="app__section-container">

        </section>
      </main>
    );
  }
}

export default App;
