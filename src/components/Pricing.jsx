import React from 'react'

const packs = [
  { name: 'Starter – 1 Jar', note: 'Good for trying it out.', price: '€29', cta: 'Add to Cart', popular: false },
  { name: 'Most Popular – 3-Pack', note: 'Ideal for consistent daily use. Save 15%.', price: '€79', cta: 'Add to Cart', popular: true },
  { name: 'Power User – 5-Pack', note: 'For serious lifters and couples. Save 25%.', price: '€119', cta: 'Add to Cart', popular: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">Choose Your Pack</h2>
        <p className="mt-3 text-center text-slate-300">Subscribe & save extra 10% — pause or cancel anytime.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {packs.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border ${p.popular ? 'border-blue-400/40 ring-2 ring-blue-500/30' : 'border-white/10'} bg-white/5 p-6 flex flex-col`}>
              {p.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow">Most Popular</div>
              )}
              <div className="text-white font-semibold text-lg">{p.name}</div>
              <div className="text-slate-300 text-sm mt-1">{p.note}</div>
              <div className="mt-6 text-4xl font-extrabold text-white">{p.price}<span className="text-base font-medium text-slate-300"> / jar</span></div>
              <ul className="mt-4 text-sm text-slate-300 space-y-1">
                <li>• Fast EU shipping</li>
                <li>• Secure payment</li>
                <li>• No unnecessary fillers</li>
              </ul>
              <button className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg">{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
