import Navbar from "./components/Navbar"
import SectionIndex from "./components/SectionIndex"
import Hero from "./components/Hero"
import About from "./components/About"
import AboutBand from "./components/AboutBand"
import StatsBand from "./components/StatsBand"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Interests from "./components/Interests"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import { useReveal } from "./hooks/useReveal"

export default function App() {
  useReveal([])

  return (
    <>
      <Cursor />
      <Navbar />
      <SectionIndex />
      <main>
        <Hero />
        <About />
        <AboutBand />
        <StatsBand />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
