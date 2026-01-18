'use client';

import { useEffect, useState } from 'react';
import PlantGrid from '@/components/PlantGrid';

export default function PlantsPage() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const res = await fetch('/api/plants');
        if (!res.ok) {
          throw new Error('Failed to fetch plants');
        }

        const data = await res.json();

        // Ensure we always have an array
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format from API');
        }

        setPlants(data);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchPlants();
  }, []);

  return (
    <section className="py-20 bg-white min-h-screen">
        <div className="">
            <h1>{plants.length}</h1>
        </div>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">
            All Plants
          </h1>
          <p className="text-lg text-black">
            Explore our complete plant encyclopedia
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-xl text-black">Loading plants…</p>
        )}

        {/* Error State */}
        {error && (
          <p className="text-center text-red-600 text-lg">
            {error}
          </p>
        )}

        {/* Empty State */}
        {!loading && !error && plants.length === 0 && (
          <p className="text-center text-black text-lg">
            No plants found.
          </p>
        )}

        {/* Plants Grid */}
        {!loading && !error && plants.length > 0 && (
          <PlantGrid plants={plants} />
        )}
      </div>
    </section>
  );
}
