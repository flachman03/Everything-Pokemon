import React from 'react'
import { shallow } from 'enzyme'
import { UserContainer, mapDispatchToProps, mapStateToProps } from './UserContainer'

describe('UserContainer', () => {
  let wrapper, user;
  beforeEach(() => {
    user = {
      name: 'Ryan',
      currentLineup: [],
      pokedex: [],
      games: []
    }
    wrapper = shallow(<UserContainer user={user}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should start off with a default state', () => {
    const expected = {
      searchType: '', 
      name: '',
      error: '',
    }
    const result = wrapper.state()
    expect(result).toEqual(expected)
  })

  it('should be able to handle to input changes and set them to state', () => {
    const event = {target: {name: 'name', value: 'charmander'}}
    const expected = 'charmander'
    wrapper.instance().handleOnChange(event)
    expect(wrapper.state().name).toEqual(expected)
  })
})