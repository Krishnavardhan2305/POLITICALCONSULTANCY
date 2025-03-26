// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://toinugsebmtlehvesjtp.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY 


export const supabase = createClient(supabaseUrl, supabaseKey)