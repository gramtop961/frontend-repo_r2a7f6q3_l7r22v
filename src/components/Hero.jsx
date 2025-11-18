import React from 'react'
import { ShieldCheck, Truck, Lock } from 'lucide-react'

export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute -top-32 -right-32 h-72 w-72 sm:h-[28rem] sm:w-[28rem] bg-blue-600/20 blur-3xl rounded-full"/>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 sm:h-[28rem] sm:w-[28rem] bg-orange-500/10 blur-3xl rounded-full"/>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            No Powders. No Shakers. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-300">Just Results.</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-xl">
            Clean, sugar-free creatine gummies for daily power, focus and recovery.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-200/90">
            {[
              'Pure creatine monohydrate',
              'No bloating, no crash',
              'Portable, tasty, easy to take anywhere',
              'Produced under European quality standards',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                <span className="h-2 w-2 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-orange-300"/>
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" onClick={(e)=>handleScroll(e,'pricing')} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg">
              Get Creatine Gummies
            </a>
            <a href="#benefits" onClick={(e)=>handleScroll(e,'benefits')} className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-white/90 hover:bg-white/5">
              How It Works
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-slate-300/90">
            <div className="flex items-center gap-2"><Truck className="h-5 w-5 text-blue-400"/> <span className="text-sm">Fast EU Shipping</span></div>
            <div className="flex items-center gap-2"><Lock className="h-5 w-5 text-blue-400"/> <span className="text-sm">Secure Checkout</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-blue-400"/> <span className="text-sm">Premium Quality</span></div>
          </div>
        </div>

        {/* Right image (placeholder illustration) */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/20 to-orange-400/10 blur-2xl rounded-3xl" />
          <div className="relative aspect-[4/5] rounded-3xl bg-white/5 border border-white/10 p-6 flex items-end overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.12),transparent_45%)]" />
            <div className="absolute top-6 left-6 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 shadow-lg" />
            <div className="ml-auto mb-2 text-right">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">Creatine Gummies</div>
              <div className="text-sm text-slate-300">Sugar-free • Vegan • 30 servings</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400 text-center">Visual is illustrative. Replace with product render.</p>
        </div>
      </div>
    </section>
  )
}
