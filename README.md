🎬 Movie Library

A simple Movie Library App built with React + Vite + Tailwind CSS.
Browse popular movies, search by title, and manage your personal watchlist.
Movies are fetched from the TMDB API.

🚀 Features

Browse popular movies (fetched from TMDB API).

Search movies by title.

Add / remove movies from your personal watchlist.

Watchlist is saved in localStorage (persists on refresh).

Pagination support (browse multiple pages of results).

Bonus: Client-side routing with React Router.


🛠️ Tech Stack

React + Vite

Tailwind CSS (styling)

React Router (routing)

Axios (API requests)

TMDB API (movie data)



⚙️ Setup Instructions

Follow these steps to run this project on your local system 👇

1. Clone the repository
git clone https://github.com/surajrampur/Movie-Library-App
cd movie-library

2. Install dependencies
npm install

3. Get a TMDB API Key

Go to TMDB
 and create a free account.

Navigate to Settings → API → Request API Key.

Copy your API key.

4. Create .env.local file

In the root of the project, create a file named .env.local and add:

VITE_TMDB_API_KEY=your_tmdb_api_key_here


⚠️ Do NOT commit this file to GitHub.

5. Start the development server
npm run dev


Visit 👉 http://localhost:5173



📸 Screenshots (optional)
<img width="1908" height="928" alt="image" src="https://github.com/user-attachments/assets/5d1e4d7d-af8a-4f59-82be-921a3ba3ffcb" />
<img width="1421" height="840" alt="image" src="https://github.com/user-attachments/assets/bbe41226-c6c6-4627-9c84-f9cb78e27312" />



📌 Future Improvements

Infinite scroll instead of pagination.

Movie details modal.

Dark mode.
