export async function GET(request, { params }) {
  const { id } = await params;

  if (!id) {
    return Response.json({ error: 'Missing plant ID' }, { status: 400 });
  }

  try {
    // Use NEXT_PUBLIC_TREFLE_TOKEN like the featured plants route
    const apiUrl = `https://trefle.io/api/v1/plants/${id}?token=${process.env.NEXT_PUBLIC_TREFLE_TOKEN}`;
    
    const res = await fetch(apiUrl, { 
      cache: 'no-store'
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Trefle API error:', res.status, text);
      return Response.json({ 
        error: 'Failed to fetch plant', 
        details: text 
      }, { status: res.status });
    }

    const data = await res.json();
    
    if (data && data.data) {
      return Response.json(data.data);
    } else {
      return Response.json({ error: 'Invalid response from Trefle API' }, { status: 500 });
    }
  } catch (err) {
    console.error('Fetch error:', err.message);
    return Response.json({ 
      error: 'Server error fetching plant', 
      message: err.message 
    }, { status: 500 });
  }
}