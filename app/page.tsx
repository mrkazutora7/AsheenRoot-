// apps/web/app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

type Project = {
  id: string
  name: string
  created_at: string
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [newProject, setNewProject] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*')
      if (error) console.error('Error fetching projects:', error)
      else setProjects(data || [])
    }

    fetchProjects()
  }, [])

  const addProject = async () => {
    if (!newProject.trim()) return
    const { data, error } = await supabase
      .from('projects')
      .insert([{ name: newProject }])
    if (error) console.error('Error adding project:', error)
    else {
      setProjects([...projects, ...(data || [])])
      setNewProject('')
    }
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AsheenRoot Projects</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          placeholder="New project name"
          className="border p-2 flex-grow"
        />
        <button onClick={addProject} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="border p-3 rounded">
            <strong>{project.name}</strong>
            <div className="text-sm text-gray-500">{new Date(project.created_at).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
