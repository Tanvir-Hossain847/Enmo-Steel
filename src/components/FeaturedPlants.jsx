"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaStar, FaLeaf, FaSeedling } from 'react-icons/fa';

export default function FeaturedPlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  // const TREFLE_TOKEN = process.env.NEXT_PUBLIC_TREFLE_TOKEN;
  const API_URL = `/api/plants/featured`;

  useEffect(() => {
    async function fetchPlants() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        setPlants(json);
      } catch (error) {
        console.error('Error fetching plants:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlants();
  }, []);

  console.log(plants);



  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-xl">Loading plants… 🌱</p>
      </section>
    );
  }


  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-black uppercase tracking-widest mb-4">
              Featured Collection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Discover Amazing Plants
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-[#628141]"></div>
              <p className="text-lg text-black">
                Curated selections from our extensive database
              </p>
              <div className="h-px w-20 bg-[#628141]"></div>
            </div>
          </div>

          {/* Featured Plants Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="bg-white border-2 border-black hover:border-[#628141] transition-all duration-300 group shadow-lg"
              >
                {/* Image */}
                <div className="aspect-square border-b-2 border-black group-hover:border-[#628141] transition-colors">
                  {plant.image_url ? (
                    <img
                      src={plant.image_url}
                      alt={plant.common_name || 'Plant'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#628141]/10 flex items-center justify-center">
                      <FaLeaf className="text-6xl text-[#628141]" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Names */}
                  <div>
                    <h4 className="text-xl font-bold text-black group-hover:text-[#628141] transition-colors leading-tight">
                      {plant.common_name || 'Unknown Plant'}
                    </h4>
                    <p className="text-black italic text-sm">
                      {plant.scientific_name || 'Scientific name unavailable'}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="text-sm text-black space-y-1">
                    {plant.family && (
                      <p>
                        <span className="font-semibold">Family:</span> {plant.family}
                      </p>
                    )}

                    {plant.rank && (
                      <p>
                        <span className="font-semibold">Rank:</span> {plant.rank}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {plant.edible && (
                      <span className="px-2 py-1 text-xs border border-black">
                         Edible
                      </span>
                    )}
                    {plant.native && (
                      <span className="px-2 py-1 text-xs border border-black">
                         Native
                      </span>
                    )}
                    {plant.growth_form && (
                      <span className="px-2 py-1 text-xs border border-black">
                        {plant.growth_form}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <button className="btn btn-outline btn-sm mt-3 border-black hover:border-[#628141] hover:bg-[#628141] hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>

            ))}
          </div>


          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link href={`/plants/${plant.id}`} className="btn bg-[#628141] text-white btn-lg shadow-lg">
              View All Featured Plants
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}