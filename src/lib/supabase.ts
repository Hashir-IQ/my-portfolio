import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tgecmchwamdhiwqgphkw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZWNtY2h3YW1kaGl3cWdwaGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExNzE1ODAsImV4cCI6MjA4Njc0NzU4MH0.n5PjZM1zLuZVHU66Jec0zrtlvB2aMD1ImnvwhbXJ-aM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
