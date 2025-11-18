import React, { useState } from 'react'

export default function EmailCapture(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer', tag: 'landing' })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-white font-semibold text-lg">Get training tips & early access to new products</h3>
        <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="w-full sm:w-96 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button disabled={status==='loading'} className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold disabled:opacity-60">{status==='loading'?'Joining...':'Join the list'}</button>
        </form>
        {status==='success' && <p className="mt-2 text-green-400 text-sm">Thanks! Check your inbox for a welcome email.</p>}
        {status==='error' && <p className="mt-2 text-red-400 text-sm">Something went wrong. Please try again.</p>}
      </div>
    </section>
  )
}
