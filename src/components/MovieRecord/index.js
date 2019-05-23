import React from "react"
import { Link } from "react-router-dom"

const MovieRecord = props => {
  const { id, title, showtimes, thumbnail_url } = props

  return (
    <div className="movie-record">
      <img alt="Thumbnail" src={thumbnail_url} className="thumbnail" />
      <div className="info">
        <span className="title">{title}</span>
        <section className="showtimes">
          <header>Show times:</header>
          <ul>
            {showtimes.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          {!showtimes.length && (
            <span className="no-records">no showtimes</span>
          )}
        </section>
      </div>
      <Link className="button" to={`/movies/${id}`}>
        info
      </Link>
    </div>
  )
}

export default MovieRecord
