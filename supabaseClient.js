import { createClient } from '@supabase/supabase-js';

// ✅ REMPLACE ces deux valeurs par celles de ton projet Supabase
export const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
export const SUPABASE_ANON_KEY = 'YOUR-ANON-KEY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);