import Problem1  from './problems/Problem1'
import Problem2  from './problems/Problem2'
import Problem3  from './problems/Problem3'
import Problem4  from './problems/Problem4'
import Problem5  from './problems/Problem5'
import Problem6  from './problems/Problem6'
import Problem7  from './problems/Problem7'
import Problem8  from './problems/Problem8'
import Problem9  from './problems/Problem9'
import Problem10 from './problems/Problem10'
import { useState } from 'react'

const PROBLEMS = [
  { id: 1,  label: '1 · Controlled',   component: <Problem1  /> },
  { id: 2,  label: '2 · Submit',       component: <Problem2  /> },
  { id: 3,  label: '3 · Toggle',       component: <Problem3  /> },
  { id: 4,  label: '4 · Delete',       component: <Problem4  /> },
  { id: 5,  label: '5 · Multi-Input',  component: <Problem5  /> },
  { id: 6,  label: '6 · Full Todo',    component: <Problem6  /> },
  { id: 7,  label: '7 · Edit',         component: <Problem7  /> },
  { id: 8,  label: '8 · Search',       component: <Problem8  /> },
  { id: 9,  label: '9 · Select',       component: <Problem9  /> },
  { id: 10, label: '10 · Full CRUD',   component: <Problem10 /> },
]

export default function App() {
  const [active, setActive] = useState(1)
  const current = PROBLEMS.find((p) => p.id === active)

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: '32px auto', padding: '0 16px' }}>
      <h1 style={{ fontSize: 20, marginBottom: 16 }}>CSIT340 · IE1 Practice</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {PROBLEMS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive(p.id)}
            style={{
              padding: '5px 12px',
              borderRadius: 6,
              border: '1px solid',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: active === p.id ? 700 : 400,
              background: active === p.id ? '#2a5cf5' : '#f0f2f8',
              color: active === p.id ? '#fff' : '#1a1c23',
              borderColor: active === p.id ? '#2a5cf5' : '#d1d5db',
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div>{current.component}</div>
    </div>
  )
}
