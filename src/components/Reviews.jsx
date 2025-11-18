import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  { name: 'Lukas M.', text: 'Finally consistent with creatine. Tastes good and I don’t forget anymore.', rating: 5 },
  { name: 'Anna K.', text: 'No bloat, easy on the stomach. I keep a jar at work.', rating: 5 },
  { name: 'Jonas P.', text: 'Stronger in the gym after 3 weeks. Gummies make it simple.', rating: 4 },
  { name: 'Marta S.', text: 'Love the convenience. No shaker, no mess.', rating: 5 },
  { name: 'Felix R.', text: 'Great for travel. I take them on non-training days too.', rating: 5 },
  { name: 'Sarah B.', text: 'Easy to remember, taste is on point.', rating: 4 },
]

function Stars({count}){
  return (
    <div className="flex">
      {Array.from({length:5}).map((_,i)=> (
        <Star key={i} className={`h-4 w-4 ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'}`} />
      ))}
    </div>
  )
}

export default function Reviews(){
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-slate-300 text-sm">4.8 / 5 from 1,100+ reviews</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What lifters are saying</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Stars count={r.rating} />
              <p className="mt-3 text-slate-200">“{r.text}”</p>
              <div className="mt-4 text-sm text-slate-400">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
