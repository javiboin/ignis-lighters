import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
