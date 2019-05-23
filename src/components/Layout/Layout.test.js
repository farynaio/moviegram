import React from "react"
import { shallow } from "enzyme"

import Layout from "../Layout"

describe("Layout", () => {
  let props

  beforeEach(() => {
    props = {
      children: () => <div />,
      backLocation: undefined,
      searchHandler: undefined
    }
  })

  it("should render properly when backLocation provided and no searchHandler", () => {
    props.backLocation = "/"
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render properly when searchHandler provided and no backLocation", () => {
    props.searchHandler = () => null
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
