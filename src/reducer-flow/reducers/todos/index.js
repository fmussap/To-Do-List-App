'use strict'

import * as actions from './actions'

export const INITIAL_STATE = []

const todos = (state = INITIAL_STATE, action = { type: null }) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case actions.TOGGLE_ITEM:
      return state.map((todo) => {
        return {
          ...todo,
          completed: todo.id === action.payload.id
            ? !todo.completed : todo.completed
        }
      })
  }
  return state
}

export default todos
