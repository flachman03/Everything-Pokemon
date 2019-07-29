import React from 'react'
import { shallow } from 'enzyme'
import { PokemonContainer, mapDispatchToProps } from './PokemonContainer'
// import { getMorePokemonThunk } from '../../Thunks/pokemonThunks'

describe('PokemonContainer', () => {
  let wrapper, mockData, getMorePokemon, getMorePokemonThunk;
  beforeEach(() => {
    getMorePokemon = jest.fn()
    getMorePokemonThunk = jest.fn()
    mockData = [{name: 'charmander'}]
    wrapper = shallow(<PokemonContainer data={mockData} getMorePokemon={getMorePokemon}/>)
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockData)
      })
    })
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should have a default state', () => {
    const expected = {offset: 0}
    expect(wrapper.state()).toEqual(expected)
  })

  it('should have a method that adds offset to the state', async () => {
    const expected = {offset: 20}
    await wrapper.instance().handleNextPokemon(20)
    expect(wrapper.state()).toEqual(expected)
  })

  it('should call the function getMorePokemon with handling the next pokemon method', async () => {
    await wrapper.instance().handleNextPokemon(20)
    expect(getMorePokemon).toHaveBeenCalled()
    expect(getMorePokemon).toHaveBeenCalledWith(20)
  })

  it('should have a method that reduces offset from the state', async () => {
    await wrapper.instance().handleNextPokemon(20)
    expect(wrapper.state().offset).toEqual(20)
    await wrapper.instance().handlePrevPokemon(20)
    expect(wrapper.state().offset).toEqual(0)
  })

  it('should call the getMorePokemon function when handleing previous pokemon', async () => {
    await wrapper.instance().handlePrevPokemon(20)
    expect(getMorePokemon).toHaveBeenCalled()
  })

  // it('should mapDispatchToProps with the getMorePokemonThunk', () => {
  //   const mockDispatch = jest.fn()
  //   const offset = 20;
  //   const expected = { 'getMorePokemon': getMorePokemonThunk()}
  //   const result = mapDispatchToProps(mockDispatch)
  //   expect(result).toHaveBeenCalledWith(expected)
  // })
})