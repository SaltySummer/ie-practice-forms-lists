# CSIT340 · IE1 Practice — React Forms & Lists

React practice problems for the **Forms & Lists** lecture.  
Clone, install, run — then solve the TODOs in `src/problems/`.

## Setup

```bash
git clone https://github.com/ellienanachi/ie-practice.git
cd ie-practice
npm install
npm run dev
```

## Problems

| # | Topic | Key concept |
|---|-------|-------------|
| 1 | Controlled Input | `value` + `onChange` pair |
| 2 | Form Submit | `e.preventDefault()`, spread add, clear |
| 3 | Toggle | `map` + object spread order |
| 4 | Delete | `filter` |
| 5 | Multi-Input Form | `[e.target.name]` computed key |
| 6 | Full Todo (blank) | combine 1–5 |
| 7 | Edit in Place | `editId` state + map to save |
| 8 | Search / Filter | derived value, no extra state |
| 9 | Select + Category | controlled `<select>` + filter |
| 10 | Full CRUD (blank) | add + toggle + edit + delete |

## 3 Rules to Remember

1. Every `<input>` needs `value` **and** `onChange` — missing either breaks it.
2. Never mutate state arrays — use spread / `map` / `filter` to return a new one.
3. Object spread order matters — spread first, then override.
