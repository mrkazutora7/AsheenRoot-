'use client'
import { supabase } from '@/lib/supabaseClient'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    supabase.from('projects').select('*').then(console.log)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <p>Testing Supabase connection...</p>
    </div>
  )
}
