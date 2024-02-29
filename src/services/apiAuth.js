import supabase from "./supabase";

export async function apiLogin({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Email or Password doesn't exist");

  return { data };
}

export async function getCurrentUser() {
  // get user from localStorage
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
