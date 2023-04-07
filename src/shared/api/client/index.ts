import { createClient } from "@supabase/supabase-js";
import { SUPABASE_API_URL, SUPABASE_ANON_KEY } from "@/shared/config";

export const client = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY);
