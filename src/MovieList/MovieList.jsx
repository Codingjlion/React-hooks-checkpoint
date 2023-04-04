import React from "react";
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies, titleFilter, rateFilter }) => {
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="movie-list">
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
