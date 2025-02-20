import React from 'react';
import { Movie } from '../store/moviesSlice';
import './MovieModal.css';

interface MovieModalProps {
    movie: Movie;
    onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>{movie.name}</h2>
                <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={movie.name} />
                <p>{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieModal;