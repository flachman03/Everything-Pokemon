import React from 'react'
import { shallow } from 'enzyme'
import { RegionCard } from './RegionCard'

describe('RegionCard', () => {
  let wrapper, mockData;
  beforeEach(() => {
    mockData = {name: 'Khoto'}
    wrapper = shallow(<RegionCard region={mockData} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a button named region-card__button', () => {
    expect(wrapper.find('.region-card__button')).toHaveLength(1)
  })
})