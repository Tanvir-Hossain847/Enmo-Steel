"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaLeaf, FaChevronRight, FaFlask } from 'react-icons/fa';

export default function FeaturedPlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `/api/plants/featured`;

  useEffect(() => {
    async function fetchPlants() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setPlants(json || []);
      } catch (error) {
        console.error('Error fetching plants:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPlants();
  }, []);

  if (loading) return <LoadingSkeleton />;

  if (!plants || plants.length === 0) {
    return (
      <section className="py-20 text-center border-2 border-black m-4 bg-gray-50">
        <FaFlask className="mx-auto text-4xl mb-4 text-[#628141]" />
        <p className="text-lg font-bold uppercase text-black">No specimens found in database</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header - Normal Scale */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-black pb-6">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#628141] mb-2 block">
              Our Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Featured Plants
            </h2>
          </div>
          <Link href="/plants" className="text-black font-bold border-b-2 border-black hover:text-[#628141] hover:border-[#628141] transition-all pb-1 mt-4 md:mt-0">
            Browse Full Catalog →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plants.map((plant) => (
            <Link 
              href={`/plants/${plant.id}`} 
              key={plant.id}
              className="group"
            >
              <div className="bg-white border-2 border-black group-hover:shadow-[8px_8px_0px_0px_rgba(98,129,65,1)] transition-all">
                
                {/* Image */}
                <div className="aspect-square border-b-2 border-black overflow-hidden bg-gray-100">
                  {plant.image_url ? (
                    <img
                      src={plant.image_url}
                      alt={plant.common_name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FaLeaf className="text-5xl text-[#628141]/20" />
                    </div>
                  )}
                </div>

                {/* Info Area - Standard Font Sizes */}
                <div className="p-5">
                  <h4 className="text-xl font-bold text-black mb-1">
                    {plant.common_name || 'Class: Unknown'}
                  </h4>
                  <p className="text-sm italic text-gray-600 mb-4">
                    {plant.scientific_name || 'Nomenclature missing'}
                  </p>

                  <div className="space-y-2 border-t border-gray-100 pt-4 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Family</span>
                      <span className="font-semibold">{plant.family || 'N/A'}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {plant.edible && <Tag text="Edible" color="bg-green-100" />}
                    <Tag text={plant.growth_form || "Specimen"} color="bg-gray-100" />
                  </div>

                  <div className="mt-6 py-2 border-2 border-black text-center font-bold text-sm group-hover:bg-black group-hover:text-white transition-colors">
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tag({ text, color }) {
  return (
    <span className={`px-2 py-1 text-[11px] font-bold uppercase border border-black ${color} text-black`}>
      {text}
    </span>
  );
}

function LoadingSkeleton() {
  return (
    <section className="py-24 bg-white container mx-auto px-4 max-w-7xl">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border-2 border-black aspect-[3/4] bg-gray-50 animate-pulse"></div>
        ))}
      </div>
    </section>
  );
}