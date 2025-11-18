import React from 'react'

export default function Explainer() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-10">
          <h2 className="text-3xl font-extrabold text-white text-center">Why Creatine Gummies?</h2>
          <p className="mt-4 text-slate-300 text-center max-w-3xl mx-auto">Creatine increases your muscles’ phosphocreatine stores, helping you regenerate ATP — your body’s fast energy currency — for better power and performance. Consistency matters most: daily intake saturates your muscles over 3–4 weeks.</p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[
              {title:'Take X gummies per day',text:'Adjust to your preferred daily dose.'},
              {title:'Any time of day',text:'With or without food — stay consistent.'},
              {title:'Use daily 3–4 weeks',text:'That’s when you feel full effect.'},
            ].map((it)=> (
              <div key={it.title} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
                <div className="text-white font-semibold">{it.title}</div>
                <div className="text-slate-300 text-sm mt-1">{it.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-slate-300 text-sm">Gummies make it easy to stay consistent — no mixing, no mess, no forgetting.</div>
        </div>
      </div>
    </section>
  )
}
