import React from 'react'
import { ShieldCheck, Leaf, FileText, Truck } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'EU-Made Quality', text: 'Produced under European standards for purity and safety.' },
  { icon: Leaf, title: 'Clean Formula', text: 'No cheap fillers, sugar or unnecessary junk.' },
  { icon: FileText, title: 'Transparent Ingredients', text: 'You know exactly what you’re putting in your body.' },
  { icon: Truck, title: 'Fast Shipping', text: 'Ships quickly from within the EU.' },
]

export default function Trust() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon,title,text}) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-7 w-7 text-blue-400"/>
              <div className="mt-2 text-white font-semibold">{title}</div>
              <div className="text-slate-300 text-sm">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
