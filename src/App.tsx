import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByGenre, selectMovie, clearMovie, Movie } from './store/moviesSlice';
import { RootState, AppDispatch } from './store/store';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { comedy, crime, selectedMovie, status } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesByGenre('35'));
    dispatch(fetchMoviesByGenre('80'));
  }, [dispatch]);

  const handleMovieClick = (movie: Movie) => {
    dispatch(selectMovie(movie));
  };

  const handleModalClose = () => {
    dispatch(clearMovie());
  };

  return (
    <div className="App">
      <Header />
      <hr />
      <section>
        <h2>Comedy</h2>
        {status === 'loading' ? <p>Loading...</p> : <MovieList movies={comedy} onMovieClick={handleMovieClick} />}
      </section>
      <hr />
      <section>
        <h2>Crime</h2>
        {status === 'loading' ? <p>Loading...</p> : <MovieList movies={crime} onMovieClick={handleMovieClick} />}
      </section>
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleModalClose} />}
    </div>
  );
};

export default App;