import React, { useEffect, useState } from 'react'
import { getPopularMovies, searchMovies } from '../services/api'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'


export default function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    useEffect(() => {
        fetchPopular()
    }, [])





    async function fetchPopular() {
        setLoading(true)
        setError(null)
        try {
            const data = await getPopularMovies()
            setMovies(data)
        } catch (e) {
            setError('Failed to load popular movies')
        } finally {
            setLoading(false)
        }
    }


    async function handleSearch(q) {
        if (!q) return fetchPopular()
        setLoading(true)
        setError(null)
        try {
            const results = await searchMovies(q)
            setMovies(results)
        } catch (e) {
            setError('Search failed')
        } finally {
            setLoading(false)
        }
    }


    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && movies.length === 0 && <p>No movies found.</p>}


            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}