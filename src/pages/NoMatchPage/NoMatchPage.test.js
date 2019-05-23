import React from "react"
import { shallow } from "enzyme"

import NoMatchPage from "../NoMatchPage"

describe("NoMatchPage", () => {
  it("should render properly", () => {
    const wrapper = shallow(<NoMatchPage />)
    expect(wrapper).toMatchSnapshot()
  })
})
