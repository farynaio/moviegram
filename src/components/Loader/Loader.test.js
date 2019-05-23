import React from "react"
import { shallow } from "enzyme"

import Loader from "../Loader"

describe("Loader", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper).toMatchSnapshot()
  })
})
