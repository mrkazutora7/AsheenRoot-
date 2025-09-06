'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function HomePage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*')
      if (error) console.error(error)
      else setProjects(data || [])
    }

    fetchProjects()
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </main>
  )
}
