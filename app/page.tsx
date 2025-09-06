'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function HomePage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    supabase.from('projects').select('*').then(({ data, error }) => {
      if (error) console.error(error)
      else setProjects(data || [])
    })
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to AsheenRoot 👋</h1>
      <p className="mb-4">Your saved projects:</p>
      <ul className="list-disc pl-4">
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
