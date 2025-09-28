import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { WatchlistProvider } from './context/WatchlistContext'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<WatchlistProvider>
<App />
</WatchlistProvider>
</BrowserRouter>
</React.StrictMode>
)