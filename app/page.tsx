'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabaseClient'

export default function HomePage() {
  const [projects, setProjects] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    supabase.from('projects').select('*').then(({ data, error }) => {
      if (error) {
        console.error(error)
        setMessage('Error loading projects')
      } else {
        setProjects(data || [])
      }
    })
  }, [])

  const handleAddProject = async () => {
    if (!name) return
    const { error } = await supabase.from('projects').insert({ name })
    if (error) {
      console.error(error)
      setMessage('Failed to add project')
    } else {
      setMessage('Project added!')
      setName('')
      supabase.from('projects').select('*').then(({ data }) => setProjects(data || []))
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to AsheenRoot 👋</h1>
      <input
        type="text"
        placeholder="New project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleAddProject} className="bg-black text-white px-4 py-2 mb-4">
        Add Project
      </button>
      {message && <p className="text-sm text-gray-600 mb-4">{message}</p>}
      <ul className="list-disc pl-4">
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
