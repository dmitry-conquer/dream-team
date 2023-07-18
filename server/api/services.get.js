import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async event => {
  const client = serverSupabaseClient(event);
  const { data } = await client.from("dream_team_services").select("*");
  return { data };
});
