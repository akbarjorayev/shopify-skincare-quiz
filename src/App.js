import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style/App.css'

const Hero = lazy(() => import('./pages/Hero/Hero'))
const Quiz = lazy(() => import('./pages/Quiz/Quiz'))
const Result = lazy(() => import('./pages/Result/Result'))

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
