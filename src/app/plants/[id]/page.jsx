import PlantDetail from './PlantDetail';

export default function Page({ params }) {
  // This is a server component — safe to access params
  const { id } = params;

  return <PlantDetail plantId={id} />;
}
