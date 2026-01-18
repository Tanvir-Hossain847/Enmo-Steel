export async function GET() {
  try {
    const res = await fetch(
      `https://trefle.io/api/v1/plants?token=${process.env.NEXT_PUBLIC_TREFLE_TOKEN}`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      return Response.json(
        { error: 'Failed to fetch featured plants' },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Optional: pick top 8 featured plants
    return Response.json(data.data.slice(0, 8));
  } catch (error) {
    return Response.json(
      { error: 'Server error fetching featured plants' },
      { status: 500 }
    );
  }
}
