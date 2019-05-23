import React from "react"
import { Link, withRouter } from "react-router-dom"

import Search from "../../components/Search"

const Layout = ({ children, backLocation, searchHandler }) => (
  <div className="layout">
    <div className="header-main">
      {backLocation && (
        <Link className="backlink button" to={backLocation}>
          Back
        </Link>
      )}
      {searchHandler && <Search onSearch={searchHandler} />}
    </div>
    <main>{children}</main>
  </div>
)

export default withRouter(Layout)
