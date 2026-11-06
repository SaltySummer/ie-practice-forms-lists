import { useState } from 'react'
import Problem1 from './problems/Problem1'
import Problem2 from './problems/Problem2'
import Problem3 from './problems/Problem3'
import Problem4 from './problems/Problem4'
import Problem5 from './problems/Problem5'
import Problem6 from './problems/Problem6'

const problems = [
  { label: 'P1: Controlled Input', component: Problem1 },
  { label: 'P2: Form Submit', component: Problem2 },
  { label: 'P3: Toggle', component: Problem3 },
  { label: 'P4: Delete', component: Problem4 },
  { label: 'P5: Multi-Input', component: Problem5 },
  { label: 'P6: Full Todo', component: Problem6 },
]

export default function App() {
  const [active, setActive] = useState(0)
  const ActiveProblem = problems[active].component

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '16px' }}>IE Practice — Forms & Lists</h1>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {problems.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            style={{
              padding: '6px 14px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              background: active === i ? '#1a1a1a' : '#fff',
              color: active === i ? '#fff' : '#1a1a1a',
              cursor: 'pointer',
              fontWeight: active === i ? 'bold' : 'normal',
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '24px' }}>
        <ActiveProblem />
      </div>
    </div>
  )
}
