export async function POST(req: Request) {
  const data = await req.json();
  return new Response(JSON.stringify({ message: 'Received data', data }), { status: 200 });
}
