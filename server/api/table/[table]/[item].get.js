import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async event => {
  const client = serverSupabaseClient(event);

  const { table, item } = event.context.params;

  const { data } = await client.from(table).select("*").eq('id', item);
  return { data };
});



