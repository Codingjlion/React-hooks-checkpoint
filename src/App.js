import './App.css';
import MovieCard from './MovieCard/MovieCard';
import MovieList from './MovieList/MovieList';
import Filter from './Filter/Filter';
import { useState } from 'react';
import AddMovie from './AddMovie/AddMovie';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://aworldoffilm.files.wordpress.com/2014/06/wall2.jpg?w=1024&h=666&crop=1" ,
      rating: 9.3
    },
    {
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL: "https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=1280&h=720",
      rating: 9.2
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://p4.wallpaperbetter.com/wallpaper/608/740/57/the-dark-knight-hd-wallpaper-wallpaper-preview.jpg",
      rating: 9.0
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateFilterChange = (event) => {
    setRateFilter(event.target.value);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <Filter 
        titleFilter={titleFilter} 
        rateFilter={rateFilter} 
        onTitleFilterChange={handleTitleFilterChange} 
        onRateFilterChange={handleRateFilterChange} 
      />
      <MovieList 
        movies={movies} 
        titleFilter={titleFilter} 
        rateFilter={rateFilter} 
        render={(movie) => (
          <MovieCard 
            key={movie.title} 
            title={movie.title} 
            description={movie.description} 
            posterURL={movie.posterURL} 
            rating={movie.rating} 
           />
        )}
      />
       <AddMovie  onNewMovie={addMovie} />
    </div>
  );
}

export default App;
