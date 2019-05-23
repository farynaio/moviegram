import { GET_MOVIE, GET_MOVIES } from "./actionTypes"

export const getMovies = () => ({
  type: GET_MOVIES.INTENT
})

export const getMovie = id => ({
  type: GET_MOVIE.INTENT,
  payload: {
    id
  }
})
