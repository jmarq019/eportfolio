import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Academics from './pages/Academics'
import Experience from './pages/Experience'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is rendered on every page */}
      <Navbar />

      {/* Main content area grows to fill space between navbar and footer */}
      <main className="flex-1 bg-warm-gray">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>

      {/* Footer is rendered on every page */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
