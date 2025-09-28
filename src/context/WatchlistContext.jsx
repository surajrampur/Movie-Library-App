import React, { createContext, useContext, useReducer, useEffect } from 'react'

const WatchlistStateContext = createContext(null)
const WatchlistDispatchContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload
    case 'ADD':
      if (state.some(m => m.id === action.payload.id)) return state
      return [action.payload, ...state]
    case 'REMOVE':
      return state.filter(m => m.id !== action.payload)
    default:
      return state
  }
}

export function WatchlistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [], () => {
    try {
      const raw = localStorage.getItem('watchlist')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('watchlist', JSON.stringify(state))
    } catch (e) {
      console.error('Failed to save watchlist', e)
    }
  }, [state])

  return (
    <WatchlistStateContext.Provider value={state}>
      <WatchlistDispatchContext.Provider value={dispatch}>
        {children}
      </WatchlistDispatchContext.Provider>
    </WatchlistStateContext.Provider>
  )
}

export const useWatchlist = () => useContext(WatchlistStateContext)
export const useWatchlistDispatch = () => useContext(WatchlistDispatchContext)
