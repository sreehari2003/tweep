import { createClient } from "@supabase/supabase-js";
import { ENV } from "@app/config/env";

export const supabase = createClient(ENV.uri, ENV.anon);
