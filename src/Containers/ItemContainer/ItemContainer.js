import React from 'react'
import { connect } from 'react-redux'
import { ItemCard } from '../../Components/ItemCard/ItemCard'
import { getItemCategories } from '../../apiCalls'
import { getItems } from '../../Thunks/itemThunks'
import './ItemContainer.scss'

export class ItemContainer extends React.Component {
  constructor() {
    super();
    this.state ={
      offset: 0,
      categories: []
    }
  }

  componentDidMount() {
    getItemCategories(0)
      .then(data => this.setState({categories: data.results}))
  }

  async handleMoreCategories() {
    await this.setState({offset: Math.min(this.state.offset + 20, 40)})
    getItemCategories(this.state.offset)
      .then(data => this.setState({categories: data.results}))
  }

  async handlePrevCategories() {
    await this.setState({offset: Math.max(this.state.offset - 20, 0)})
    getItemCategories(this.state.offset)
      .then(data => this.setState({categories: data.results}))
  }

  render() {
    const { data } = this.props
    const displayItems = data.map( item => {
      return <ItemCard item={item}/>
    })
    const displayCategories = this.state.categories.map( category => {
      return <button
              className="category-button" 
             >{category.name}</button>
    })
    return (
      <section className="item-section">
        <article className="display-category__article">
          <ul className="category-list">
            {displayCategories}
          </ul>
          <ul className="category-more__buttons">
            {this.state.offset !== 0 && <button 
            className="more-item__button"
            onClick={() => this.handlePrevCategories()}
            >Previous Categories</button>}
            {this.state.offset !== 40 && <button 
            className="more-item__button"
            onClick={() => this.handleMoreCategories()}
            >More Categories</button>}
          </ul>
        </article>
        <article className="display-item__article">
          {displayItems}
        </article>
      </section>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   getItemsByCategory: (category) => dispatch 
// })

export default connect(null,null)(ItemContainer)