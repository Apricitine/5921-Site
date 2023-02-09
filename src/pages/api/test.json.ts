export async function get({ params, request }) {
  return new Response(JSON.stringify({
    key: "value"
  }));
}