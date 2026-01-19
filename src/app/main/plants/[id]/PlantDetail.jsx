'use client';
import { useEffect, useState } from 'react';
import { Leaf, Book, Calendar, Sprout, Globe, Info, ArrowLeft, Microscope } from 'lucide-react';

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
        setPlant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (plantId) fetchPlant();
  }, [plantId]);

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Microscope className="text-[#628141] animate-spin" size={48} />
        <span className="font-mono text-xs uppercase tracking-[0.3em] font-black">Analyzing Specimen...</span>
      </div>
    </div>
  );

  if (error || !plant) return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="border-4 border-black p-8 max-w-md text-center">
        <h2 className="text-2xl font-black uppercase mb-4">Registry Error</h2>
        <p className="text-gray-500 font-bold uppercase text-xs mb-6">{error || "Specimen not found in archive"}</p>
        <button onClick={() => window.history.back()} className="bg-black text-white px-8 py-3 font-black uppercase text-xs tracking-widest">Return to Index</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-12 pb-24">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-12 border-b-2 border-black pb-6">
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 font-black uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
            Back to Archive
          </button>
          <div className="hidden md:flex items-center gap-4 font-mono text-[10px] uppercase text-gray-400">
            <span>Entry ID: {plant.id}</span>
            <span className="h-4 w-px bg-gray-200"></span>
            <span>Status: Verified</span>
          </div>
        </div>

        {/* Main Dossier Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: The Specimen Plate */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="border-4 border-black shadow-[15px_15px_0px_0px_rgba(98,129,65,1)] relative group overflow-hidden bg-gray-50">
                {plant.image_url ? (
                  <img 
                    src={plant.image_url} 
                    alt={plant.common_name} 
                    className="w-full h-auto object-cover aspect-[4/5] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="aspect-[4/5] flex items-center justify-center">
                    <Leaf size={120} className="text-gray-200" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 bg-black text-white px-4 py-2 font-mono text-[10px] uppercase tracking-tighter">
                  Plate Fig. {plant.id}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Data */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Header Identity */}
            <div className="border-l-8 border-[#628141] pl-8">
              <span className="bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-6 inline-block">
                Botanical Specimen
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-4">
                {plant.common_name || "Unknown"}
              </h1>
              <p className="text-2xl italic font-light text-gray-500 serif tracking-tight">
                {plant.scientific_name}
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-3 border-y-2 border-black py-8 gap-8">
              <div>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Discovery Year</h4>
                <p className="text-xl font-black text-black">{plant.year || "N/A"}</p>
              </div>
              <div>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Family Unit</h4>
                <p className="text-xl font-black text-black">{plant.family_common_name || "Unclassified"}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-400 mb-2">Taxon Rank</h4>
                <p className="text-xl font-black text-[#628141]">Species</p>
              </div>
            </div>

            {/* Taxonomy & Bibliography Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
                <h3 className="flex items-center gap-2 font-black uppercase text-xs tracking-widest mb-6">
                  <Book size={16} /> Nomenclature
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-[10px] font-black text-gray-400 uppercase">Primary Authority</dt>
                    <dd className="text-sm font-bold text-black">{plant.author || "Standard unknown"}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-black text-gray-400 uppercase">Genus Group</dt>
                    <dd className="text-sm font-bold text-black">
                      {typeof plant.genus === 'object' ? plant.genus.name : plant.genus}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border-2 border-black p-6 hover:bg-gray-50 transition-colors">
                <h3 className="flex items-center gap-2 font-black uppercase text-xs tracking-widest mb-6">
                  <Globe size={16} /> Geographic Data
                </h3>
                <p className="text-sm font-bold leading-relaxed text-gray-600">
                  {plant.observations || "Global distribution data pending further field research and observation."}
                </p>
              </div>
            </div>

            {/* Synonyms Tag Cloud */}
            {plant.synonyms?.length > 0 && (
              <div className="pt-8 border-t border-dashed border-gray-200">
                <h3 className="font-black uppercase text-[10px] tracking-widest text-gray-400 mb-6">Historical Aliases (Synonyms)</h3>
                <div className="flex flex-wrap gap-2">
                  {plant.synonyms.map((syn, i) => (
                    <span key={i} className="border border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-black hover:text-white transition-all cursor-default">
                      {syn}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bibliography Section */}
            {plant.bibliography && (
              <div className="bg-black text-white p-8">
                <h3 className="font-black uppercase text-xs tracking-widest mb-4 opacity-50">Bibliography / Reference</h3>
                <p className="text-xs leading-relaxed font-mono italic">
                  {plant.bibliography}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}