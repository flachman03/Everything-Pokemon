import React from 'react'
import { shallow } from 'enzyme'
import { GameCard } from './GameCard'

describe('GameCard', () => {
  let wrapper, mockGame;
  beforeEach(() => {
    mockGame = {name: 'fire red'}
    wrapper = shallow(<GameCard game={mockGame} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a game card article element', () => {
    expect(wrapper.find('.game-card')).toHaveLength(1)
  })
})