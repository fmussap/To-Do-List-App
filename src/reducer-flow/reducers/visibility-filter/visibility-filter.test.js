'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import visibilityFilter, { INITIAL_STATE } from './index'

it('visibilityFiltershould be a function', () => {
  expect(visibilityFilter).to.be.a('function')
})

it('should show all todos', () => {
  const before = 'SHOW_COMPLETED'
  const action = deepFreeze({
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: 'SHOW_ALL' }
  })
  const after = 'SHOW_ALL'
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show only completed todos', () => {
  const before = 'SHOW_ALL'
  const action = deepFreeze({
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: 'SHOW_COMPLETED' }
  })
  const after = 'SHOW_COMPLETED'
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should show only active todos', () => {
  const before = 'SHOW_ALL'
  const action = deepFreeze({
    type: 'SET_VISIBILITY_FILTER',
    payload: { filter: 'SHOW_ACTIVE' }
  })
  const after = 'SHOW_ACTIVE'
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return latest state when action is unknown', () => {
  const before = 'SHOW_ALL'
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: { filter: 'SHOW_ACTIVE' }
  })
  const after = 'SHOW_ALL'
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('should return initialState when latest state is undefined', () => {
  const before = undefined
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: { }
  })
  const after = INITIAL_STATE
  expect(visibilityFilter(before, action)).to.be.equal(after)
})
