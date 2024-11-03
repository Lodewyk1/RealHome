import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gefytcpuhlxtrtqdyqok.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZnl0Y3B1aGx4dHJ0cWR5cW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NTU1MDEsImV4cCI6MjA0NDMzMTUwMX0.EiQxDhsQw0FtJ64E-mP7Fq5uoYzyx6mxipwPFe3hTsc'
export const supabase = createClient(supabaseUrl, supabaseKey)