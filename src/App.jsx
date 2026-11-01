import Navbar from "./components/Navbar"
import SectionIndex from "./components/SectionIndex"
import Hero from "./components/Hero"
import About from "./components/About"
import StatsBand from "./components/StatsBand"
import HowIThink from "./components/HowIThink"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CurrentlyLearning from "./components/CurrentlyLearning"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
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
        <StatsBand />
        <HowIThink />
        <Experience />
        <Skills />
        <Projects />
        <CurrentlyLearning />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
