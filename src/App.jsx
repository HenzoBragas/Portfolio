import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Home from './components/Home'
import Social from './components/Social'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Menu />
          <Home />
          <Social />
          <AboutMe />
          <Projects />
          <Footer />
      </div>
    </>
  )
}

export default App
