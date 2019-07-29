import React from 'react'
import { shallow } from 'enzyme'
import { MoveContainer } from './MoveContainer'

describe('MoveContainer', () => {
  let wrapper, mockData;
  beforeEach(() => {
    mockData = [{name: 'quick attack'}]
    wrapper = shallow(<MoveContainer data={mockData}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const expected = {offset: 0, category: []}
    expect(wrapper.state()).toEqual(expected)
  })
})