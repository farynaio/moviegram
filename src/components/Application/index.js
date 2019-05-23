import React from "react"
import { Helmet } from "react-helmet"

import { WEBSITE_NAME } from "../../env"

const Application = ({ children, ...rest }) => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{WEBSITE_NAME}</title>
    </Helmet>
    {children}
  </div>
)
export default Application
