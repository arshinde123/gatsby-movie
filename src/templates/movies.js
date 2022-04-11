import React from 'react';
import { graphql } from 'gatsby';
import { getDifferenceInDays } from '../utils/date';
import Tag from '../components/common/tag';

const Team = ({ data }) => {
  console.log({ data });
  const movies = data.movies.edges;
  return (
    <>
      <div style={{ margin: '50px 250px' }}>
        <h1>Movies</h1>
        {movies.map((movie, index) => (
          <div key={index} className="card mb-3 movie-card" style={{}}>
            <div className="row g-0">
              <div className="col-4">
                <img
                  src={movie.node.poster}
                  className="card-img-top"
                  alt="Movie poster"
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between align-items-start">
                    <h5 className="movie-title">{movie.node.title}</h5>
                  </div>
                  <p className="card-text movie-overview">{movie.node.overview.childMarkdownRemark.html}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Release date: {getDifferenceInDays(movie.node.releaseDate)} days ago
                      {/* Release date: {movie.node.releaseDate} days ago */}
                    </small>
                  </p>
                  <div className="genres">
                    {movie.node.genres?.length &&
                      movie.node.genres.map((genre, index) => (
                        <span key={index}>
                            <Tag value={genre} />
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Team;

export const pageQuery = graphql`
  query($limit: Int, $skip: Int) {
    movies: allContentfulMovie(limit: $limit, skip: $skip) {
      edges {
        node {
          slug
          title
          poster
          releaseDate
          genres
          overview {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`