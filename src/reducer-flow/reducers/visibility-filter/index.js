'use strict'

import { SET_VISIBILITY_FILTER } from './actions'
export const INITIAL_STATE = 'SHOW_ALL'

const visibilityFilter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: return action.payload.filter
  }
  return state
}

export default visibilityFilter
