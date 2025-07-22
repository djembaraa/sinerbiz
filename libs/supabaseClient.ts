// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Pastikan environment variables sudah diatur di .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Pastikan environment variables ada sebelum menginisialisasi client
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase URL or Anon Key. Check your .env.local file."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
