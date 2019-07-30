import React from 'react'
import { getPokemonByName } from '../../apiCalls'
import './ExpandedPokemonCard.scss'
import { NavLink } from 'react-router-dom'

export class ExpandedPokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {
        name: '',
        moves: [],
        stats: [],
        sprites: []
      }
    } 
  }

  componentDidMount() {
    getPokemonByName(this.props.pokemon)
      .then(data => this.setState({pokemon: data}))
  }

  displayMoveList() {
    return this.state.pokemon.moves.map( move => {
        console.log(move.move.name)
        return <NavLink to={`/moves/${move.move.name}`} className="expanded-move-button">{move.move.name}</NavLink>
      })
  }

  displayStats() {
    return this.state.pokemon.stats.map( stat => {
      return <li className="expanded-base-stats">{stat.stat.name}: {stat.base_stat}</li>
    })
  }

  displaySprites() {
    return Object.entries(this.state.pokemon.sprites).map( sprite => {
      if (sprite[1] !== null) {
      return <img src={sprite[1]} alt={this.state.pokemon.name} className="expanded-sprite"/>
      }
    })
  }
  render() {
    return (
      <article>
        <h1 className="expanded-pokemon-name">{this.state.pokemon.name.toUpperCase()}</h1>
        <section className="expanded-poke-container">
          <div className="expanded-move-list-container">
            <h2 className="move-list-header">Move List</h2>
            <ul className="expanded-move-list">
              {this.displayMoveList()}
            </ul>
          </div>
          <div className="expanded-stat-container">
            <h2 className="expanded-stat-header">Base Stats</h2>
            <ul className="display-stats-list">
              {this.displayStats()}
            </ul>
          </div>
          <div className="expanded-sprite-container">
            <ul>
              {this.displaySprites()}
            </ul>
          </div>
        </section>
      </article>
    )
  }
}