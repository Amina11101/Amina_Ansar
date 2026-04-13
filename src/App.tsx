import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectPage from './pages/ProjectPage'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div className="app">
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Contact />
                <Footer />
              </motion.div>
            }
          />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
