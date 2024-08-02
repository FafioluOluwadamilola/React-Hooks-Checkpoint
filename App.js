import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieForm from './MovieForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Rampage', description: 'A primatologist teams up with a genetic engineer to stop a gigantic group of animals, including an albino gorilla whom he befriended, after the animals are exposed to an experimental pathogen. 1', posterURL: 'https://m.media-amazon.com/images/M/MV5BMTAyMzA2MTcwNDFeQTJeQWpwZ15BbWU4MDQxOTkyMDUz._V1_QL75_UX820_.jpg', rating: 8 },
    { title: 'Iron Man 2', description: 'Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.', posterURL: 'https://m.media-amazon.com/images/M/MV5BMTQyOTIxNjM4M15BMl5BanBnXkFtZTcwNjgwODYzMw@@._V1_QL75_UX820_.jpg', rating: 8 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

   const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleFilter = ({ title, rating }) => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          (!title || movie.title.toLowerCase().includes(title.toLowerCase())) &&
          (!rating || movie.rating >= rating)
      )
    );
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieForm onAddMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;