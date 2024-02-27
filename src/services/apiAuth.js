import supabase from "./supabase";

export async function apiLogin({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Email or Password doesn't exist");

  return { data };
}
