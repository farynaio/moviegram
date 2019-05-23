import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import * as moment from "moment"

import Layout from "../../components/Layout"
import List from "../../components/List"
import { movieSelector } from "../../selectors"
import { movieActions } from "../../actions/actions"
import { SHOWTIME_FORMAT } from "../../env"

class MoviePage extends PureComponent {
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id)
  }

  render() {
    if (!this.props.movie) {
      return null
    }

    const { title, showtimes, description, image_url } = this.props.movie

    return (
      <Layout backLocation="/">
        <div className="movie-page page">
          <div className="header clearfix">
            <img alt="featured" src={image_url} className="featured-image" />
            <h1 className="title">{title}</h1>
          </div>
          <div className="info">
            <List
              list={showtimes.map(s => moment(s).format(SHOWTIME_FORMAT))}
              title="Show times:"
              className="showtimes"
            />
            <p className="description">{description}</p>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state, props) => ({
  movie: movieSelector(state, props.match.params.id)
})

const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(movieActions.getMovie(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MoviePage))
