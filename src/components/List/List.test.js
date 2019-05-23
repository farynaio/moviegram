import React from "react"
import { shallow } from "enzyme"

import List from "../List"

describe("List", () => {
  let props

  beforeEach(() => {
    props = {
      list: []
    }
  })

  it("should render properly when empty list provided", () => {
    const wrapper = shallow(<List {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render properly when no empty list provided", () => {
    props.list = [1, 2]
    const wrapper = shallow(<List {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
