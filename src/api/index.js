import { createAPIcall } from "./utils"

/*
 * params:
 * - page - A single page of ideas (integer > 0)
 */
export const getMovies = createAPIcall({
  url: "/movies",
  method: "GET"
})

/*
 * path vars:
 * - movie ID
 */
export const getMovie = createAPIcall({
  url: "/movies/:id",
  method: "GET"
})
