import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import NavBar from './components/NavBar'


export default function App() {
return (
<div className="min-h-screen bg-gray-100">
<NavBar />
<main className="container mx-auto px-4 py-6">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/watchlist" element={<Watchlist />} />
</Routes>
</main>
</div>
)
}