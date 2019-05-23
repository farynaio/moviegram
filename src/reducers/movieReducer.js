import { GET_MOVIE, GET_MOVIES } from "../actions/actionTypes"

export const DEFAULT_STATE = {
  movies: [],
  error: null,
  loading: false
}

export const mappings = {
  [GET_MOVIES.REQUEST]: state => ({
    ...state,
    error: null,
    loading: true
  }),
  [GET_MOVIES.SUCCESS]: (state, payload) => ({
    ...state,
    movies: payload,
    loading: false
  }),
  [GET_MOVIES.FAILURE]: (state, { error }) => ({
    ...state,
    error,
    loading: false
  }),

  [GET_MOVIE.REQUEST]: state => ({
    ...state,
    error: null,
    loading: true
  }),
  [GET_MOVIE.SUCCESS]: (state, payload) => ({
    ...state,
    movies: [...state.movies, payload],
    loading: false
  }),
  [GET_MOVIE.FAILURE]: (state, { error }) => ({
    ...state,
    error,
    loading: false
  })
}
