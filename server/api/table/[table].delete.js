import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async event => {
  const client = serverSupabaseClient(event);

  const { id } = getQuery(event);
  const { table } = event.context.params;

  const { error } = await client.from(table).delete().eq("id", id);
  return error;
});
