import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const warnMissing = () => {
  // Keep this visible in dev/prod if env vars are missing.
  // Auth UI also surfaces this in-app.
  // eslint-disable-next-line no-console
  console.warn("Missing Supabase env vars: VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY");
};

const createFallbackClient = () => ({
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signOut: async () => ({ error: null }),
    signUp: async () => ({ data: null, error: { message: "Supabase env vars are missing." } }),
    signInWithPassword: async () => ({ data: null, error: { message: "Supabase env vars are missing." } }),
  },
  from: () => ({
    select() { return this; },
    eq() { return this; },
    order() { return this; },
    limit() { return this; },
    maybeSingle: async () => ({ data: null, error: { message: "Supabase env vars are missing." } }),
    upsert: async () => ({ data: null, error: { message: "Supabase env vars are missing." } }),
  }),
});

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (warnMissing(), createFallbackClient());
