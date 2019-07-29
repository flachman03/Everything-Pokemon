import React from 'react'
import { shallow } from 'enzyme'
import { GameContainer } from './GameContainer'

describe('GameContainer', () => {
  let wrapper, mockData;
  beforeEach(() => {
    mockData = [{name: 'fire red'}]
    wrapper = shallow(<GameContainer data={mockData}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const expected = {}
    expect(wrapper.state()).toEqual(expected)
  })

  it('should take in a data prop', () => {
    const expected = {data: mockData}
    expect(wrapper.instance().props).toEqual(expected)
  })
})