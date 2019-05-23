import "react-app-polyfill/ie11"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import reducer from "./reducers"
import { initStore } from "./store"
import Router from "./router"
import Application from "./components/Application"

import "./styles/style.css"

const { store } = initStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Application>
        <Router />
      </Application>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
