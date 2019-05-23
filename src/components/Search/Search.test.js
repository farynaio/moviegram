import React from "react"
import { shallow } from "enzyme"

import { Search } from "../Search"

describe("Search", () => {
  let props

  beforeEach(() => {
    props = {
      placeholder: "placeholder",
      name: "name"
    }
  })

  it("should render properly", () => {
    const wrapper = shallow(<Search {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
