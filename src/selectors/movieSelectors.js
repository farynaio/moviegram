import { createSelector } from "reselect"

const selector = state => state.movie

const propsSelector = (_, props) => props

export const moviesSelector = createSelector(
  selector,
  ({ movies }) => movies
)

export const movieSelector = createSelector(
  [selector, propsSelector],
  (state, id) =>
    state.movies.length ? state.movies.find(m => m.id === id) : null
)

export const movieLoadingSelector = createSelector(
  selector,
  ({ loading }) => loading
)
