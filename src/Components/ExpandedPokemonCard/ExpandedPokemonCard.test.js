import React from 'react'
import { shallow } from 'enzyme'
import { ExpandedPokemonCard } from './ExpandedPokemonCard'

describe('ExpandedPokemonCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ExpandedPokemonCard />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})