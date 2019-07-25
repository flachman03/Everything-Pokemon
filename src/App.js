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
      const url = 'https://pokeapi.co/api/v2/pokemon/lugia'
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
          <ul>
            <li>Home</li>
            <li>Pokedex</li>
            <li>Items</li>
            <li>Moves</li>
          </ul>
        </header>
      </main>
    );
  }
}

export default App;
