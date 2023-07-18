import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async event => {
  const client = serverSupabaseClient(event);


  const body = await readBody(event);
  const { table } = event.context.params;


  const data = await client.from(table).insert(body);
  console.log(data);
  return data;
});
