import React from "react"
import { Switch, Route } from "react-router"

import MoviesListPage from "./pages/MoviesListPage"
import MoviePage from "./pages/MoviePage"
import NoMatchPage from "./pages/NoMatchPage"

const Home = MoviesListPage

const router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/movies/:id" component={MoviePage} />
    <Route component={NoMatchPage} />
  </Switch>
)

export default router
