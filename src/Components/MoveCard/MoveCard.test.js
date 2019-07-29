import React from 'react'
import { shallow } from 'enzyme'
import { MoveCard } from './MoveCard'

describe('MoveCared', () => {
  let wrapper, mockMove;
  beforeEach(() => {
    mockMove = {move: 'quick attack', type: {name: 'normal'}}
    wrapper = shallow(<MoveCard move={mockMove} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have an article named move-card', () => {
    expect(wrapper.find('.move-card')).toHaveLength(1)
  })

  it('should have h2 named move-card__name', () => {
    expect(wrapper.find('.move-card__name')).toHaveLength(1)
  })

  it('should have p tag named move-card__type', () => {
    expect(wrapper.find('.move-card__type')).toHaveLength(1)
  })
})