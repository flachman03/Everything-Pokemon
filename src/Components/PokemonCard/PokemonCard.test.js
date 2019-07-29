import React from 'react'
import { shallow } from 'enzyme'
import { PokemonCard } from './PokemonCard'

describe('PokemonCard', () => {
  let wrapper, mockData;
  beforeEach(() => {
    mockData = {name: 'charmander', sprites: {}}
    wrapper = shallow(<PokemonCard pokemon={mockData} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have an article named card', () => {
    expect(wrapper.find('.card')).toHaveLength(1)
  })

  it('should have img named card__image', () => {
    expect(wrapper.find('.card__image')).toHaveLength(1)
  })

  it('should have h2 named card__title', () => {
    expect(wrapper.find('.card__title')).toHaveLength(1)
  })
})