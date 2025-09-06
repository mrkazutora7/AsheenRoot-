import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ridvgugkeiiwimwbusfs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHZndWdrZWlpd2ltd2J1c2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxODUwNTgsImV4cCI6MjA3Mjc2MTA1OH0.TKPLao0kr8FekzQwhfrzRtWEN-xdozbChMqERryGZPY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
