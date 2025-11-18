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
    <div className="min-h-screen bg-[#0E1116] text-slate-200 relative">
      {/* Premium layered background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Base deep gradient + vignette */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(1200px 800px at 50% 0%, rgba(15,23,42,0.35), transparent 60%), linear-gradient(180deg, #0E1116 0%, #0B0E13 60%, #0A0D12 100%)',
          }}
        />

        {/* Subtle premium grid masked to center area */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '36px 36px, 36px 36px',
            maskImage:
              'radial-gradient(80% 60% at 50% 35%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.15) 100%)',
            WebkitMaskImage:
              'radial-gradient(80% 60% at 50% 35%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        {/* Soft brand glows: blue (performance) + orange (energy) */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-[52rem] w-[52rem] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.25), rgba(37,99,235,0) 55%)',
          }}
        />
        <div
          className="absolute top-1/3 -right-40 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-25"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.22), rgba(249,115,22,0) 60%)',
          }}
        />
        <div
          className="absolute bottom-[-10rem] -left-40 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-20"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.18), rgba(37,99,235,0) 60%)',
          }}
        />

        {/* Highlight sweep for premium sheen */}
        <div
          className="absolute inset-x-0 top-0 h-64 opacity-30"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0) 60%)',
            maskImage:
              'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black, transparent)'
          }}
        />

        {/* Fine noise for texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\' viewBox=\'0 0 300 300\'>\n  <filter id=\'n\'>\n    <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.95\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\n    <feColorMatrix type=\'saturate\' values=\'0\'/>\n    <feComponentTransfer>\n      <feFuncA type=\'table\' tableValues=\'0 0.2\'/>\n    </feComponentTransfer>\n  </filter>\n  <rect width=\'100%\' height=\'100%\' filter=\'url(#n)\'/>\n</svg>")',
            backgroundSize: '300px 300px'
          }}
        />
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
