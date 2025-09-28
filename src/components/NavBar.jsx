import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWatchlist } from '../context/WatchlistContext'


export default function NavBar() {
const location = useLocation()
const watchlist = useWatchlist()


return (
<header className="bg-white shadow">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="text-xl font-bold">Movie Library</Link>
<nav className="flex items-center gap-4">
<Link to="/" className={`py-2 px-3 rounded ${location.pathname === '/' ? 'bg-gray-200' : ''}`}>Home</Link>
<Link to="/watchlist" className={`py-2 px-3 rounded ${location.pathname === '/watchlist' ? 'bg-gray-200' : ''}`}>
Watchlist ({watchlist.length})
</Link>
</nav>
</div>
</header>
)
}