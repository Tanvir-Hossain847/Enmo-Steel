'use client';

import { useEffect, useState } from 'react';
import { FaLeaf, FaBook, FaCalendar } from 'react-icons/fa';

export default function PlantDetail({ plantId }) {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlant() {
      try {
        const res = await fetch(`/api/plants/${plantId}`);
        if (!res.ok) throw new Error('Failed to fetch plant');
        const data = await res.json();
        setPlant(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPlant();
  }, [plantId]);

  if (loading) return <p className="text-center py-20">Loading plant… 🌱</p>;
  if (error) return <p className="text-center text-red-600 py-20">{error}</p>;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">{plant.common_name}</h1>
          <p className="italic text-lg text-black">{plant.scientific_name}</p>
        </div>

        <div className="w-full mb-8 border-2 border-black hover:border-[#628141]">
          {plant.image_url ? (
            <img
              src={plant.image_url}
              alt={plant.common_name}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="w-full h-64 bg-[#628141]/10 flex items-center justify-center">
              <FaLeaf className="text-6xl text-[#628141]" />
            </div>
          )}
        </div>

        <div className="space-y-4 text-black">
          {plant.family && <p><FaLeaf className="inline text-[#628141]" /> <span className="font-semibold">Family:</span> {plant.family}</p>}
          {plant.author && <p><FaBook className="inline text-[#628141]" /> <span className="font-semibold">Author:</span> {plant.author}</p>}
          {plant.year && <p><FaCalendar className="inline text-[#628141]" /> <span className="font-semibold">Year:</span> {plant.year}</p>}
          {plant.synonyms && plant.synonyms.length > 0 && (
            <p className="text-sm italic text-gray-600">
              <span className="font-semibold">Synonyms:</span> {plant.synonyms.slice(0, 4).join(', ')}
              {plant.synonyms.length > 4 ? '...' : ''}
            </p>
          )}
          {plant.bibliography && <p className="text-sm"><span className="font-semibold">Bibliography:</span> {plant.bibliography}</p>}
          {plant.genus && <p className="text-sm"><span className="font-semibold">Genus:</span> {plant.genus}</p>}
        </div>
      </div>
    </section>
  );
}
 