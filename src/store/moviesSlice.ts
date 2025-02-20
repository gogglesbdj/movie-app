import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { buildCreateApi } from '@reduxjs/toolkit/query';
import axios from 'axios';

export interface Movie {
    id: number;
    original_name: string;
    name: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    genre_ids: number[];
    popularity: number;
    vote_average: number;
    vote_count: number;
    first_air_date: string;
    adult: boolean;
    origin_country: string[];
    original_language: string;
}

export interface MoviesState {
    comedy: Movie[];
    crime: Movie[];
    selectedMovie: Movie | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: MoviesState = {
    comedy: [],
    crime: [],
    selectedMovie: null,
    status: 'idle',
};

export const fetchMoviesByGenre = createAsyncThunk(
    'movies/fetchByGenre',
    async (genreId: string) => {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/movies/${genreId}`);
        return response.data as Movie[];
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        selectMovie(state, action) {
            state.selectedMovie = action.payload;
        },
        clearMovie(state) {
            state.selectedMovie = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMoviesByGenre.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
            state.status = 'idle';
            // save movies in the corresponding category based on genre id passed in action meta
            if (action.meta.arg === '35') {
                state.comedy = action.payload;
            } else if (action.meta.arg === '80') {
                state.crime = action.payload;
            }
        });
    },
});

export const { selectMovie, clearMovie } = moviesSlice.actions;

export default moviesSlice.reducer;