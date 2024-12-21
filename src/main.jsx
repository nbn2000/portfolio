import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'

const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="center-loader"><span className="loader"></span></div>}>
      <App />
    </Suspense>
  </StrictMode>
)
