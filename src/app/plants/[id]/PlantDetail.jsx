'use client';
import { useEffect, useState } from 'react';
import { Leaf, Book, Calendar, Sprout, Globe, Info } from 'lucide-react';

export default function PlantDetail({ plantId }) {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlant() {
      try {
        const res = await fetch(`/api/plants/${plantId}`);
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to fetch plant');
        }
        const data = await res.json();
        console.log('Plant data:', data);
        setPlant(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (plantId) {
      fetchPlant();
    }
  }, [plantId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#628141]/5 to-white flex items-center justify-center">
        <div className="text-center">
          <Leaf className="text-6xl text-[#628141] animate-pulse mx-auto mb-4" size={64} />
          <p className="text-xl text-gray-700">Loading plant details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#628141]/5 to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button 
              onClick={() => window.history.back()}
              className="bg-[#628141] text-white px-6 py-2 rounded-lg hover:bg-[#526d35] transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#628141]/5 to-white flex items-center justify-center">
        <p className="text-center text-gray-600 text-xl">No plant found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#628141]/5 to-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="text-[#628141] hover:text-[#526d35] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Plants
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image Section */}
            <div className="order-2 md:order-1">
              <div className="sticky top-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white group">
                  {plant.image_url ? (
                    <img 
                      src={plant.image_url} 
                      alt={plant.common_name || 'Plant'} 
                      className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gradient-to-br from-[#628141]/20 to-[#628141]/5 flex items-center justify-center">
                      <Leaf className="text-8xl text-[#628141]/40" size={96} />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <Sprout className="inline text-[#628141] mr-2" size={16} />
                    <span className="text-sm font-semibold text-gray-700">Plant ID: {plant.id}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="order-1 md:order-2">
              {/* Title Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-t-4 border-[#628141]">
                <div className="mb-4">
                  <span className="inline-block bg-[#628141]/10 text-[#628141] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Botanical Specimen
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {plant.common_name || 'Unknown Plant'}
                </h1>
                <p className="text-xl italic text-gray-600 mb-2">{plant.scientific_name}</p>
                {plant.family_common_name && (
                  <p className="text-gray-500 flex items-center gap-2">
                    <Leaf className="text-[#628141]" size={18} />
                    Family: {plant.family_common_name}
                  </p>
                )}
              </div>

              {/* Details Grid */}
              <div className="grid gap-4 mb-6">
                {/* Classification Card */}
                {(plant.author || plant.year || plant.genus) && (
                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#628141]">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Book className="text-[#628141]" size={20} />
                      Classification
                    </h3>
                    <div className="space-y-3">
                      {plant.author && (
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600 font-medium">Author:</span>
                          <span className="text-gray-900 text-right">{plant.author}</span>
                        </div>
                      )}
                      {plant.year && (
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600 font-medium">Year:</span>
                          <span className="text-gray-900">{plant.year}</span>
                        </div>
                      )}
                      {plant.genus && (
                        <div className="flex justify-between items-start">
                          <span className="text-gray-600 font-medium">Genus:</span>
                          <span className="text-gray-900 text-right">
                            {typeof plant.genus === 'object' ? plant.genus.name : plant.genus}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional Info Card */}
                {(plant.observations || plant.bibliography) && (
                  <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#628141]">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Info className="text-[#628141]" size={20} />
                      Additional Information
                    </h3>
                    <div className="space-y-3">
                      {plant.observations && (
                        <div>
                          <span className="text-gray-600 font-medium block mb-1">
                            <Globe className="inline mr-2 text-[#628141]" size={18} />
                            Distribution:
                          </span>
                          <p className="text-gray-900 leading-relaxed">{plant.observations}</p>
                        </div>
                      )}
                      {plant.bibliography && (
                        <div>
                          <span className="text-gray-600 font-medium block mb-1">Bibliography:</span>
                          <p className="text-gray-900 text-sm leading-relaxed">{plant.bibliography}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Synonyms Card */}
                {plant.synonyms?.length > 0 && (
                  <div className="bg-gradient-to-br from-[#628141]/5 to-transparent rounded-xl shadow-md p-6 border border-[#628141]/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Sprout className="text-[#628141]" size={20} />
                      Synonyms
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {plant.synonyms.slice(0, 6).map((synonym, index) => (
                        <span 
                          key={index}
                          className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-gray-200"
                        >
                          {synonym}
                        </span>
                      ))}
                      {plant.synonyms.length > 6 && (
                        <span className="bg-[#628141] text-white px-3 py-1 rounded-full text-sm shadow-sm">
                          +{plant.synonyms.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Decoration */}
      <div className="py-12 bg-gradient-to-t from-[#628141]/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <Leaf className="text-4xl text-[#628141]/30 mx-auto" size={48} />
        </div>
      </div>
    </div>
  );
}