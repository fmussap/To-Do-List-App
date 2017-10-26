'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import todos, { INITIAL_STATE } from './index'
import { ADD_TODO, TOGGLE_ITEM } from './actions'

it('should all be a function', () => {
  expect(todos).to.be.a('function')
})

it('should add a todo { id: 0, text: task 1 }', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'task 1' }
  })
  const after = [{
    id: 0, text: 'task 1', completed: false }]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should add a todo { id: 1, text: task 2 }', () => {
  const before = deepFreeze([{ id: 0, text: 'task 1', completed: false }])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 1, text: 'task 2' }
  })
  const after = [
    { id: 0, text: 'task 1', completed: false },
    { id: 1, text: 'task 2', completed: false }
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle first todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'task 1', completed: false },
    { id: 1, text: 'task 2', completed: false }
  ])
  const action = deepFreeze({
    type: TOGGLE_ITEM,
    payload: {
      id: 0
    }
  })
  const after = deepFreeze([
    { id: 0, text: 'task 1', completed: true },
    { id: 1, text: 'task 2', completed: false }
  ])
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle second todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'task 1', completed: false },
    { id: 1, text: 'task 2', completed: false }
  ])
  const action = deepFreeze({
    type: TOGGLE_ITEM,
    payload: {
      id: 1
    }
  })
  const after = deepFreeze([
    { id: 0, text: 'task 1', completed: false },
    { id: 1, text: 'task 2', completed: true }
  ])
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('with no and no type should return last state', () => {
  expect(todos()).to.be.deep.equal(INITIAL_STATE)
})

it('with state and no type should return this state', () => {
  const before = deepFreeze(
    [{
      id: 0, text: 'task 1', completed: false
    }]
  )
  const action = deepFreeze({
    payload: { id: 0, text: 'task 1' }
  })
  const after = [{
    id: 0, text: 'task 1', completed: false
  }]
  expect(todos(before, action)).to.be.deep.equal(after)
})
