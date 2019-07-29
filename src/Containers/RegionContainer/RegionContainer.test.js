import React from 'react'
import { shallow } from 'enzyme'
import { RegionContainer } from './RegionContainer'

describe('RegionContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RegionContainer data={[]}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const expected = {}
    expect(wrapper.state()).toEqual(expected)
  })
})