# Movie App

This app uses React TypeScript + Vite with an Express + MongoDB backend. It fetches data from the TMDB API and caches it in a MongoDB database.

## Requirements

- **Node.js**
- **npm**
- **MongoDB Atlas**

## Environment Variables

### Backend

Create a `.env` file in the `backend` folder with:
PORT=5000 TMDB_API_KEY=YOUR_TMDB_API_KEY MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/movieApp?retryWrites=true&w=majority

### Frontend

Create a `.env` file in the root of the project with:
