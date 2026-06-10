import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Profile from './views/Profile'
import Count from './views/Count'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/count"   element={<Count />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
