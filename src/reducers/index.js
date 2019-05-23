import { combineReducers } from "redux"

import * as movieReducer from "./movieReducer"

function createReducer(defaultState, reducerMappings) {
  return function(state = defaultState, { type, payload }) {
    const mapping = reducerMappings[type]
    return mapping ? mapping(state, payload) : state
  }
}

const reducer = combineReducers({
  movie: createReducer(movieReducer.DEFAULT_STATE, movieReducer.mappings)
})

export default reducer
