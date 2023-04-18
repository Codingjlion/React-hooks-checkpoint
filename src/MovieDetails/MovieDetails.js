import React from "react";
import { Link } from "react-router-dom";

function MovieDetails({ match, movies }) {
  const movie = movies.find((movie) => movie.id === parseInt(match.params.id));
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <button>
        <Link to={`/movies/${movie.id}/trailer`}>Play Trailer</Link>
      </button>
    </div>
  );
}

export default MovieDetails;
