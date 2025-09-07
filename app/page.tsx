'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Project = {
  id: string
  name: string
  created_at: string
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [newProject, setNewProject] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
      if (error) console.error('Error fetching projects:', error)
      else setProjects(data || [])
      setLoading(false)
    }

    fetchProjects()
  }, [])

  const addProject = async () => {
    if (!newProject.trim()) return
    const { data, error } = await supabase.from('projects').insert([{ name: newProject }]).select()
    if (error) console.error('Error adding project:', error)
    else {
      setProjects((prev) => [...(data || []), ...prev])
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
          className="border p-2 flex-grow rounded"
        />
        <button
          onClick={addProject}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading projects...</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.id} className="border p-3 rounded shadow-sm">
              <strong>{project.name}</strong>
              <div className="text-sm text-gray-500">
                {new Date(project.created_at).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
