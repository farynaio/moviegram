import React from "react"
import { shallow } from "enzyme"

import { MoviesListPage } from "../MoviesListPage"

const movieStab = {
  image_url: "http://image.com",
  title: "movie title",
  showtimes: [new Date(), new Date()],
  description: "movie description"
}

describe("MoviesListPage", () => {
  let props

  beforeEach(() => {
    props = {
      movies: [],
      isLoading: false,
      getMovies: () => null
    }
  })

  it("should render properly when loading", () => {
    props.isLoading = true
    const wrapper = shallow(<MoviesListPage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render properly when no movies", () => {
    const wrapper = shallow(<MoviesListPage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render properly when movies exists", () => {
    props.movies = [movieStab, movieStab]
    const wrapper = shallow(<MoviesListPage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
