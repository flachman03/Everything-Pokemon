import React from 'react'
import { shallow } from 'enzyme'
import { ItemContainer } from './ItemContainer'

describe('ItemContainer', () => {
  let wrapper, mockData, getItemCategories;
  beforeEach(() => {
    getItemCategories = jest.fn()
    mockData = [{name: 'poke ball'}]
    wrapper = shallow(<ItemContainer data={mockData}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const expected = {offset: 0, categories: []}
    expect(wrapper.state()).toEqual(expected)
  })

  it('should have a function for handling the more categories', async () => {
    wrapper.instance().handleMoreCategories()
    expect(wrapper.state().offset).toEqual(20)
  })

  it('should not be able to set offset to more than 40 when calling handleMoreCategories', () => {
    wrapper.instance().handleMoreCategories()
    expect(wrapper.state().offset).toEqual(20)
    wrapper.instance().handleMoreCategories()
    expect(wrapper.state().offset).toEqual(40)
    wrapper.instance().handleMoreCategories()
    expect(wrapper.state().offset).toEqual(40)
  })

  it('should have a method to handle previous categories', () => {
    const expected = 0
    wrapper.instance().handleMoreCategories()
    expect(wrapper.state().offset).toEqual(20)
    wrapper.instance().handlePrevCategories()
    expect(wrapper.state().offset).toEqual(expected)
  })

  it('should not be able to offset below zero when handling previous categories', () => {
    const expected = 0
    expect(wrapper.state().offset).toEqual(expected)
    wrapper.instance().handlePrevCategories()
    expect(wrapper.state().offset).toEqual(expected)
  })

  it('should take in a data prop', () => {
    const expected = {data: mockData}
    expect(wrapper.instance().props).toEqual(expected)
  })
})