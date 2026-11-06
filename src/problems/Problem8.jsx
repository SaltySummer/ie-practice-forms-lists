import { useState } from 'react'

const ITEMS = [
  { id: '1', text: 'React controlled inputs' },
  { id: '2', text: 'Array spread for adding' },
  { id: '3', text: 'Filter to delete items' },
  { id: '4', text: 'Map to toggle items' },
  { id: '5', text: 'Object spread order matters' },
  { id: '6', text: 'Prevent default on submit' },
]

export default function Problem8() {
  const [query, setQuery] = useState('')

  // TODO: derive filtered from ITEMS — do NOT use useState for filtered.
  // Keep ITEMS as-is; just compute which ones match the query.
  // Hint: item.text.toLowerCase().includes(query.toLowerCase())
  const filtered = ITEMS  // replace this line

  return (
    <div>
      <h2>Problem 8 — Search / Filter</h2>
      {/* TODO: wire up value and onChange so query updates as the user types */}
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <p style={{ color: 'gray', fontSize: 12 }}>{filtered.length} result(s)</p>
    </div>
  )
}
