import React from 'react';
import { useParams } from 'react-router-dom';


const Trailer = ({ movies }) => {
  const { id } = useParams();

  // Find the movie that matches the ID in the URL parameter
  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <div className='trailer' style={{ backgroundColor: '#f0f0f0' }}>
      <h1>Trailer for {movie.title}</h1>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Trailer;
