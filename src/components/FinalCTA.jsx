import React from 'react'

export default function FinalCTA(){
  const handleScroll = (e) => {
    e.preventDefault()
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600 to-orange-500 p-6 sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_50%)]"/>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to stop forgetting your creatine?</h2>
          <p className="mt-2 text-white/90 max-w-2xl">Make daily performance easy with creatine gummies you’ll actually enjoy taking.</p>
          <button onClick={handleScroll} className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black/20 hover:bg-black/30 text-white font-semibold shadow">
            Get Creatine Gummies Now
          </button>
        </div>
      </div>
    </section>
  )
}
