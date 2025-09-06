'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setMessage('Login failed. Try again.')
    } else {
      setMessage('Check your email for the login link.')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleLogin} className="bg-black text-white px-4 py-2">
        Send Magic Link
      </button>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </div>
  )
}
