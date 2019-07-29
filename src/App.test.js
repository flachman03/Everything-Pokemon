import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper, getPokemon, getItems, getMoves, getRegions, getGames;
  beforeEach(() => {
    getPokemon = jest.fn()
    getItems = jest.fn()
    getMoves = jest.fn()
    getRegions = jest.fn()
    getGames = jest.fn()
    wrapper = shallow(<App 
        getPokemon={getPokemon}
        getItems={getItems}
        getMoves={getMoves}
        getRegions={getRegions}
        getGames={getGames}
        />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})