import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Prevent creating client if environment variables fail to load
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Missing Supabase environment variables! Check your .env.local file.");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
