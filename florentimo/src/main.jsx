import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Layout from './App.jsx'
import { routes } from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> {
          routes.map((r, idx) => {
            const Element = r.element
            if (r.index) {
              return <Route key={`index-${idx}`} index element={<Element />} />
            }
            if (r.children) {
              const Parent = r.element
              return (
                <Route key={r.path} path={r.path} element={<Parent />}>
                  {r.children.map((c, cIdx) => {
                    const Child = c.element
                    return <Route key={`${r.path}-${c.path}-${cIdx}`} path={c.path} element={<Child />} />
                  })}
                </Route>
              )
            }
            return <Route key={r.path} path={r.path} element={<Element />} />
          })
        }
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
