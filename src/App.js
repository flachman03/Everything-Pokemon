import React from 'react';
import './App.css';
import PokeSprite from 'react-poke-sprites'

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
        <header className="App-header">
          <ul className='header-nav'>
            <li className='nav-home'>Home</li>
            <li className='nav-pokedex'>Pokedex</li>
            <li className='nav-items'>Items</li>
            <li className='nav-moves'>Moves</li>
            <li className='Nav-regions'>Regions</li>
            <li className='nav-games'>Games</li>
          </ul>
        </header>
      </main>
    );
  }
}

export default App;
