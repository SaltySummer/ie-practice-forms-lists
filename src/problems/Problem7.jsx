import { useState } from 'react'

const SEED = [
  { id: '1', text: 'Review lecture notes' },
  { id: '2', text: 'Push to GitHub' },
  { id: '3', text: 'Ask for extra credit' },
]

export default function Problem7() {
  const [items, setItems] = useState(SEED)
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  function handleStartEdit(item) {
    // TODO:
    // 1. Set editId to item.id
    // 2. Set editText to item.text (so the input starts with the current value)
  }

  function handleSave(id) {
    // TODO:
    // 1. Use map to return a new array where the item with matching id
    //    has its text replaced with editText (trimmed)
    // 2. Reset editId to null and editText to ''
  }

  return (
    <div>
      <h2>Problem 7 — Edit in Place</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) =>
          editId === item.id ? (
            <li key={item.id}>
              {/* TODO: wire up value and onChange on this input */}
              <input value={editText} onChange={(e) => setEditText(e.target.value)} />
              <button type="button" onClick={() => handleSave(item.id)}>Save</button>
              <button type="button" onClick={() => setEditId(null)}>Cancel</button>
            </li>
          ) : (
            <li key={item.id}>
              {item.text}
              {' '}
              <button type="button" onClick={() => handleStartEdit(item)}>Edit</button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
