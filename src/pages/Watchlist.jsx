import React from 'react'
import { useWatchlist } from '../context/WatchlistContext'
import MovieCard from '../components/MovieCard'


export default function Watchlist() {
const watchlist = useWatchlist() || []


return (
<div>
<h2 className="text-2xl font-semibold mb-4">Your Watchlist</h2>
{watchlist.length === 0 ? (
<p>You don't have any movies in your watchlist. Add some from the home page!</p>
) : (
<div className="movie-grid">
{watchlist.map(m => (
<MovieCard movie={m} key={m.id} />
))}
</div>
)}
</div>
)
}