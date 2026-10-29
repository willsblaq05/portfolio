import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import ScrollReveal from './components/ScrollReveal'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  return (
    <div className="min-h-screen bg-background text-heading" data-theme={theme}>
      <Navbar 
      theme={theme} 
      onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}  
      />
      <main className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
