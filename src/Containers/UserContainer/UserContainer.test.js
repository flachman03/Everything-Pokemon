import React from 'react'
import { shallow } from 'enzyme'
import { UserContainer } from './UserContainer'

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
  it('should start off with a default state', () => {
    const expected = {
      searchType: '', 
      name: '',
      error: ''
    }
    const result = wrapper.state()
    expect(result).toEqual(expected)
  })
})