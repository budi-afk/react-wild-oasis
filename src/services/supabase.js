import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zdmkzufnxzemczknwmtu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkbWt6dWZueHplbWN6a253bXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxODk5ODgsImV4cCI6MjAyMTc2NTk4OH0.D95eZNVhM-9GFQRgofyR68RkxVObQLtICq3jraYoqXQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
