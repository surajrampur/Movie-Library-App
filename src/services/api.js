import axios from 'axios'


const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'


const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    },
})


export async function getPopularMovies(page = 2) {
    const res = await tmdb.get('/movie/popular', { params: { page } })
    return res.data.results
}


export async function searchMovies(query, page = 1) {
    if (!query) return []
    const res = await tmdb.get('/search/movie', { params: { query, page, include_adult: false } })
    return res.data.results
}