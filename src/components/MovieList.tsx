import React from 'react';
import { Movie } from '../store/moviesSlice';
import './MovieList.css';

interface MovieListProps {
    movies: Movie[];
    onMovieClick: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card" onClick={() => onMovieClick(movie)}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.name} />
                    <p>{movie.name}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;