
const SUPABASE_URL = "https://pwpxrzlwhyipkffaoybs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_hBCtdcUrilAk6H3DKPT4ow_JfDlOeaA";

window.weddingSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
