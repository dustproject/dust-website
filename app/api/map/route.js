export async function GET() {
  try {
    const response = await fetch("https://alpha.dustproject.org/map");

    // Return the same content type and body
    return new Response(response.body, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "application/octet-stream"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
