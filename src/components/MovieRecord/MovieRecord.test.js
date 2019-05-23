import React from "react"
import { shallow } from "enzyme"

import MovieRecord from "../MovieRecord"

describe("MovieRecord", () => {
  let props

  beforeEach(() => {
    props = {
      id: "1",
      title: "title",
      showtimes: [],
      thumbnail_url: "thumbnail_url"
    }
  })

  it("should render properly", () => {
    const wrapper = shallow(<MovieRecord {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
