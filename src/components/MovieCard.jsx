import React from 'react'
import { TMDB_IMAGE_BASE, FALLBACK_POSTER } from '../utils/constants'
import { useWatchlist, useWatchlistDispatch } from '../context/WatchlistContext'


export default function MovieCard({ movie }) {
    const dispatch = useWatchlistDispatch()
    const watchlist = useWatchlist() || []
    const exists = watchlist.some(m => m.id === movie.id)


    const poster = movie.poster_path ? `${TMDB_IMAGE_BASE}${movie.poster_path}` : FALLBACK_POSTER


    function add() {
        dispatch({ type: 'ADD', payload: movie })
    }


    function remove() {
        dispatch({ type: 'REMOVE', payload: movie.id })
    }


    return (
        <div className="bg-white rounded shadow overflow-hidden">
            <img src={poster} alt={movie.title} className="w-full h-72 object-cover" />
            <div className="p-3">
                <h3 className="text-sm font-semibold mb-1 truncate">{movie.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{movie.release_date}</p>
                <div className="flex gap-2">
                    {!exists ? (
                        <button onClick={add} className="flex-1 py-1 text-sm bg-green-500 text-white rounded">Add to Watchlist</button>
                    ) : (
                        <button onClick={remove} className="flex-1 py-1 text-sm bg-red-500 text-white rounded">Remove</button>
                    )}
                    <a
                        className="py-1 px-2 text-sm border rounded text-gray-700"
                        href={`https://www.themoviedb.org/movie/${movie.id}`}
                        target="_blank"
                        rel="noreferrer"
                    >Details</a>
                </div>
            </div>
        </div>
    )
}