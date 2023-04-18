import React from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ movie }) => {
  // if (!movie) {
  //   return <div>Movie not found</div>;
  // }

  return (
    <Link to={`/Movie/${movie.id}`} >
      <div className="movie-card">
        <div className="movie-card-body">
          <div className="movie-card-title">{movie.title}</div>
          <div className="movie-card-rating">{movie.rating}</div>
          <div className="movie-card-description">{movie.description}</div>
        </div>
        <img src={movie.posterURL} alt={movie.title} width="200" height="200" />
      </div>
    </Link>
  );
};

export default MovieCard;
