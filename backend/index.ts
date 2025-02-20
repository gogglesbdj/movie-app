import express, { Request, Response } from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_API_URL = 'https://api.themoviedb.org/3/discover/tv';
const MONGODB_URI = process.env.MONGODB_URI;

// connect to MongoDB
mongoose.connect(MONGODB_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// define Mongoose schema for the movies
const movieSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    original_name: String,
    name: String,
    overview: String,
    backdrop_path: String,
    poster_path: String,
    genre_ids: [Number],
    popularity: Number,
    vote_average: Number,
    vote_count: Number,
    first_air_date: String,
    adult: Boolean,
    origin_country: [String],
    original_language: String
});

const Movie = mongoose.model('Movie', movieSchema);

app.use(express.json());

// route to fetch movies by genre
app.get(
    '/movies/:genreId',
    async (req: Request<{ genreId: string }>, res: Response): Promise<void> => {
        const genreId = parseInt(req.params.genreId, 10);
        try {
        const cachedMovies = await Movie.find({ genre_ids: genreId });
        if (cachedMovies.length) {
            res.json(cachedMovies);
            return;
        }
        const response = await axios.get(TMDB_API_URL, {
            params: {
                api_key: TMDB_API_KEY,
                with_genres: genreId,
            },
        });
        const movies = response.data.results;
        await Movie.insertMany(movies, { ordered: false }).catch(err => console.error('Insertion error (likely duplicates):', err));
        res.json(movies);
        } catch (error) {
            console.error('Error fetching movies:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
);  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});