import { useState } from 'react'

const CATEGORIES = ['Work', 'Personal', 'Shopping']

export default function Problem9() {
  const [form, setForm] = useState({ text: '', category: 'Work' })
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('All')

  function handleChange(e) {
    // TODO: same pattern as Problem 5 — use [e.target.name]
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.text.trim()) return
    setItems([...items, { id: crypto.randomUUID(), ...form }])
    setForm({ text: '', category: 'Work' })
  }

  // TODO: derive displayed — if filter is 'All' show everything,
  // otherwise show only items whose category matches filter.
  const displayed = items  // replace this line

  return (
    <div>
      <h2>Problem 9 — Select + Category Filter</h2>
      <form onSubmit={handleSubmit}>
        <input name="text" value={form.text} onChange={handleChange} placeholder="Task..." />
        {/* TODO: add value and onChange to this select */}
        <select name="category" value={form.category} onChange={handleChange}>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button type="submit">Add</button>
      </form>

      <div>
        <button type="button" onClick={() => setFilter('All')}>All</button>
        {CATEGORIES.map((c) => (
          <button key={c} type="button" onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>

      <ul>
        {displayed.map((item) => (
          <li key={item.id}>[{item.category}] {item.text}</li>
        ))}
      </ul>
    </div>
  )
}
