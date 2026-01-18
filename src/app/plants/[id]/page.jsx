import PlantDetail from './PlantDetail';

export default async function Page({ params }) {
  const resolvedParams = await params;
  
  console.log('Full params:', JSON.stringify(resolvedParams, null, 2));
  console.log('resolvedParams.id:', resolvedParams.id);
  console.log('Type of id:', typeof resolvedParams.id);
  
  // Extract the id more safely
  let id = resolvedParams.id;
  
  // If it's an object, try to extract the actual ID
  if (typeof id === 'object' && id !== null) {
    console.log('ID is object, keys:', Object.keys(id));
    id = id.id || id.slug || String(id);
  }
  
  // Convert to string if it's still not a string
  if (typeof id !== 'string') {
    console.error('Could not extract string ID from:', id);
    return <div className="text-center py-20 text-red-600">Invalid plant ID</div>;
  }

  console.log('Final ID to use:', id);

  return <PlantDetail plantId={id} />;
}