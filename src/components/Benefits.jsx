import React from 'react'
import { Zap, Leaf, Dumbbell, Brain, Backpack, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Zap, title: 'Fast Absorption', text: 'Pure creatine monohydrate in a smart gummy format.' },
  { icon: Leaf, title: 'Sugar-Free & Vegan', text: 'Clean formula, no unnecessary fillers or sugar.' },
  { icon: Dumbbell, title: 'Performance & Recovery', text: 'Supports strength, power, and faster recovery from training.' },
  { icon: Brain, title: 'Brain & Focus Support', text: 'Creatine also supports cognitive performance and mental clarity.' },
  { icon: Backpack, title: 'Portable & Simple', text: 'No shaker, no water – just grab, chew, and go.' },
  { icon: ShieldCheck, title: 'EU-Grade Quality', text: 'Produced in trusted European facilities with strict standards.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">Benefits & Features</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, text}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="h-7 w-7 text-blue-400"/>
              <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
