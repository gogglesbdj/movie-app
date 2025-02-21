# Movie App

This app uses React TypeScript + Vite with an Express + MongoDB backend. It fetches data from the TMDB API and caches it in a MongoDB database.

## Requirements

- **Node.js**
- **npm**
- **MongoDB Atlas**

## Running the App

1. **Clone the repository** and open the project folder.
2. **Backend**:

   - Open a terminal in the `backend` folder.
   - Run `npx ts-node-dev index.ts`
   - The backend server should start on [http://localhost:5000](http://localhost:5000).

3. **Frontend**:
   - Open another terminal in the project root (where `package.json` is located).
   - Run `npm run dev`.
   - The frontend should open on [http://localhost:5173](http://localhost:5173).

Now you can open [http://localhost:5173](http://localhost:5173) and see the app. It will fetch data from the backend on [http://localhost:5000](http://localhost:5000).

**Note**: Make sure the backend ([http://localhost:5000](http://localhost:5000)) is running before you start the frontend.
