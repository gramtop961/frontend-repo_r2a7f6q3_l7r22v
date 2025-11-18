import React from 'react'

const faqs = [
  { q: 'How do I take creatine gummies?', a: 'Take your preferred daily dose of gummies. Consistency is key — take them every day.' },
  { q: 'Will I get bloated?', a: 'Most people tolerate gummies very well. Start with a steady daily dose rather than a large loading phase.' },
  { q: 'How long before I feel results?', a: 'Expect noticeable benefits after 3–4 weeks of daily use as your muscles reach saturation.' },
  { q: 'Can I take this on non-training days?', a: 'Yes. Daily intake is important on both training and rest days.' },
  { q: 'Is it safe for women?', a: 'Yes, creatine is well-studied and safe for adults, including women, when used as directed.' },
  { q: 'Is it vegan / sugar-free?', a: 'Our gummies are formulated to be sugar-free and vegan. Check the label for full ingredient transparency.' },
  { q: 'Where is it produced?', a: 'Produced in trusted European facilities under strict quality standards.' },
]

export default function FAQ(){
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">FAQs</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map(({q,a}) => (
            <details key={q} className="group p-5">
              <summary className="cursor-pointer list-none text-white/90 font-medium group-open:text-white">{q}</summary>
              <p className="mt-2 text-slate-300 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
