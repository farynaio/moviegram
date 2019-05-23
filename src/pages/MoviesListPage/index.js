import React, { PureComponent } from "react"
import propTypes from "prop-types"
import { connect } from "react-redux"

import List from "../../components/List"
import Layout from "../../components/Layout"
import MovieRecord from "../../components/MovieRecord"
import Loader from "../../components/Loader"

import { movieActions } from "../../actions/actions"
import { moviesSelector, movieLoadingSelector } from "../../selectors"

export class MoviesListPage extends PureComponent {
  static propTypes = {
    isLoading: propTypes.bool.isRequired,
    movies: propTypes.array.isRequired,
    getMovies: propTypes.func.isRequired
  }

  state = {
    searchResult: null
  }

  componentDidMount() {
    this.props.getMovies()
  }

  searchHandler = searchResult => this.setState({ searchResult })

  render() {
    const { isLoading, movies } = this.props
    const { searchResult } = this.state
    const dataSource = searchResult ? searchResult : movies

    return (
      <Layout searchHandler={this.searchHandler} backActive={false}>
        <div className="movies-list-page page">
          {isLoading ? (
            <Loader />
          ) : (
            <List
              className="movies-list"
              list={dataSource}
              Item={MovieRecord}
            />
          )}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  movies: moviesSelector(state),
  isLoading: movieLoadingSelector(state)
})

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(movieActions.getMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListPage)
