import React from "react"
import { shallow } from "enzyme"

import { MoviePage } from "../MoviePage"

const movieStab = {
  image_url: "http://image.com",
  title: "movie title",
  showtimes: [new Date(), new Date()],
  description: "movie description"
}

describe("MoviePage", () => {
  let props

  beforeEach(() => {
    props = {
      match: {
        params: 1
      },
      getMovie: () => null
    }
  })

  it("should render properly when no movie provided", () => {
    const wrapper = shallow(<MoviePage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render properly when movie provided", () => {
    props.movie = movieStab
    const wrapper = shallow(<MoviePage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
