import React from 'react'

export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0E1116]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500 ring-1 ring-white/20" />
          <span className="text-white font-semibold tracking-wide">BIGBERG+</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#benefits" onClick={(e)=>handleScroll(e,'benefits')} className="hover:text-white">How It Works</a>
          <a href="#reviews" onClick={(e)=>handleScroll(e,'reviews')} className="hover:text-white">Reviews</a>
          <a href="#faq" onClick={(e)=>handleScroll(e,'faq')} className="hover:text-white">FAQ</a>
        </nav>
        <a href="#pricing" onClick={(e)=>handleScroll(e,'pricing')} className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-500 transition">
          Shop Now
        </a>
      </div>
    </header>
  )
}
