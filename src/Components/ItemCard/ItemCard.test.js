import React from 'react'
import { shallow } from 'enzyme'
import { ItemCard } from './ItemCard'

describe('ItemCard', () => {
  let wrapper, mockItem;
  beforeEach(() => {
    mockItem = {name: 'poke ball', sprites: {}}
    wrapper = shallow(<ItemCard item={mockItem}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have an item-card article', () => {
    expect(wrapper.find('.item-card')).toHaveLength(1)
  })

  it('should have an image of item-card__image', () => {
    expect(wrapper.find('.item-card__image')).toHaveLength(1)
  })

  it('should have a header of item-card__name', () => {
    expect(wrapper.find('.item-card__name')).toHaveLength(1)
  })
})