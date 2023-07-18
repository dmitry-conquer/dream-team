import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async event => {
  const client = serverSupabaseClient(event);

  const { table } = event.context.params;

  const { data } = await client.from(table).select("*");
  return { data };
});



