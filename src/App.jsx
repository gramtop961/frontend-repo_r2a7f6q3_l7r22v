import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemDesire from './components/ProblemDesire'
import Benefits from './components/Benefits'
import Explainer from './components/Explainer'
import Pricing from './components/Pricing'
import Story from './components/Story'
import Trust from './components/Trust'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import EmailCapture from './components/EmailCapture'

function App() {
  return (
    <div className="min-h-screen bg-[#0E1116] text-slate-200">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.06),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(37,99,235,0.05),transparent_40%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <ProblemDesire />
        <Benefits />
        <Explainer />
        <Pricing />
        <Story />
        <Trust />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <EmailCapture />
      </main>
      <footer className="pb-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} BIGBERG+ — All rights reserved.</footer>
    </div>
  )
}

export default App
