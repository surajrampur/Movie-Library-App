import React, { useState } from 'react'


export default function SearchBar({ onSearch, initial = '' }) {
const [q, setQ] = useState(initial)


function submit(e) {
e.preventDefault()
onSearch(q.trim())
}


return (
<form onSubmit={submit} className="mb-4 flex gap-2">
<input
className="flex-1 p-2 border rounded"
placeholder="Search movies by title..."
value={q}
onChange={e => setQ(e.target.value)}
/>
<button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">Search</button>
</form>
)
}