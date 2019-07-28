import React from 'react'
import { connect } from 'react-redux'
import './UserContainer.scss'

export class UserContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchType: '',
      name: '',
    }
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <section className="user-section">
        <h1 className="welcome-title">Welome to your Ultimate Pokemon Guide!</h1>
        <form>
          <input 
            type='text' 
            value={this.state.name} 
            name="name"
            onChange={ e => this.handleOnChange(e)}
            />
          <select 
          id="user-select"
          name="searchType"
          onChange={e => this.handleOnChange(e)}
          >
            <option value="linup">Current Linup</option>
            <option value="pokedex">My Pokedex</option>
            <option value="games">My Games</option>
          </select>
          <button>Add to Profile!</button>
        </form>
        <article className="user-info__container">
          <div className="lineup-container">
            <h3>Current Lineup</h3>
          </div>
          <div className="pokedex-container">
            <h3>My Pokedex</h3>
          </div>
          <div className="games-container">
            <h3>My Games</h3>
          </div>
        </article>
      </section>
    )
  }
}

const mapStateToProps = store => ({
  user: store.user
})
export default connect(mapStateToProps, null)(UserContainer)