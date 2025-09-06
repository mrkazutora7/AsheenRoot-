import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ridvgugkeiiwimwbusfs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) {
    console.error('❌ Supabase error:', error)
  } else {
    console.log('✅ Supabase data:', data)
  }
}

testConnection()
