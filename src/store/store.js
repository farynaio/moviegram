import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"

import sagas from "./sagas"

let store = null

export function initStore(reducer, preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  if (process.env.NODE_ENV === "production") {
    store = createStore(
      reducer,
      preloadedState,
      applyMiddleware(...middlewares)
    )
  } else {
    store = createStore(
      reducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(...middlewares))
    )
  }

  sagaMiddleware.run(sagas)

  return {
    store
  }
}

export function getStore() {
  return store
}
