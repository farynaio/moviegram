import React, { PureComponent } from "react"
import propTypes from "prop-types"
import { connect } from "react-redux"

import { moviesSelector } from "../../selectors"

export class Search extends PureComponent {
  static propTypes = {
    placeholder: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    treshold: propTypes.number,
    phrase: propTypes.string
  }

  static defaultProps = {
    placeholder: "Search",
    name: "search",
    treshold: 2,
    phrase: ""
  }

  constructor(props) {
    super(props)
    this.state = {
      phrase: props.phrase
    }
  }

  changeHandler = e => {
    const { movies, onSearch } = this.props
    const phrase = e.target.value

    this.setState({ phrase })

    if (phrase.length >= this.props.treshold) {
      onSearch(movies.filter(m => m.description.indexOf(phrase) !== -1))
    } else {
      onSearch(movies)
    }
  }

  render() {
    const { placeholder, name } = this.props

    return (
      <input
        type="text"
        name={name}
        className="search clearfix"
        placeholder={placeholder}
        value={this.state.phrase}
        onChange={this.changeHandler}
      />
    )
  }
}

const mapStateToProps = state => ({
  movies: moviesSelector(state)
})

export default connect(mapStateToProps)(Search)
