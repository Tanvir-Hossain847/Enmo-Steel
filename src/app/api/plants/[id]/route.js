export async function GET({ params }) {
  const { id } = params; // get the plant ID from the URL

  try {
    // Fetch the plant from Trefle API
    const res = await fetch(
      `https://trefle.io/api/v1/plants/${id}?token=${process.env.NEXT_PUBLIC_TREFLE_TOKEN}`, // server-side token
      { cache: 'no-store' }
    );

    if (!res.ok) {
      const text = await res.text(); // optional: get error text for debugging
      return Response.json(
        { error: 'Failed to fetch plant', details: text },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Return the single plant data
    return Response.json(data.data);
  } catch (error) {
    console.error('Error fetching plant by ID:', error);
    return Response.json(
      { error: 'Server error fetching plant' },
      { status: 500 }
    );
  }
}
