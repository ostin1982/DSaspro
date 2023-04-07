import { ROUTER_LINK } from "./router";
import { SUPABASE_ANON_KEY, SUPABASE_API_URL } from "./supabase";
import { SENTRY_DSN } from "./sentry";

const IS_DEVTOOLS = import.meta.env.DEV;
const IS_PRODUCTION = import.meta.env.PROD;

export {
  IS_DEVTOOLS,
  IS_PRODUCTION,
  ROUTER_LINK,
  SUPABASE_API_URL,
  SUPABASE_ANON_KEY,
  SENTRY_DSN,
};
