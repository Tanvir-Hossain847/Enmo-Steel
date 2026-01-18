'use client';

import Link from 'next/link';
import { FaLeaf, FaBook, FaCalendar, FaSeedling, FaChevronRight } from 'react-icons/fa';

export default function PlantGrid({ plants }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {plants.map((plant) => (
                <div
                    key={plant.id}
                    className="group bg-white border-2 border-black hover:shadow-[10px_10px_0px_0px_rgba(98,129,65,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                    {/* Specimen Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-black bg-gray-50">
                        {plant.image_url ? (
                            <img
                                src={plant.image_url}
                                alt={plant.common_name || 'Plant specimen'}
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <FaLeaf className="text-5xl text-gray-200 group-hover:text-[#628141] transition-colors" />
                            </div>
                        )}
                        
                        {/* Discovery Year Badge - Corner Tag Style */}
                        {plant.year && (
                            <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                                Est. {plant.year}
                            </div>
                        )}
                    </div>

                    {/* Specimen Data Label */}
                    <div className="p-5 flex flex-col flex-grow">
                        <div className="mb-4">
                            <h3 className="text-xl font-black text-black uppercase tracking-tighter leading-none mb-1 group-hover:text-[#628141] transition-colors">
                                {plant.common_name || 'Unidentified Specimen'}
                            </h3>
                            <p className="text-xs italic font-medium text-gray-500 font-serif">
                                {plant.scientific_name || 'Nomenclature pending'}
                            </p>
                        </div>

                        {/* Technical Metadata */}
                        <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                            {plant.family && (
                                <div className="flex items-center justify-between text-[11px] uppercase tracking-tight">
                                    <span className="text-gray-400 font-black">Family</span>
                                    <span className="text-black font-bold">{plant.family}</span>
                                </div>
                            )}
                            
                            {plant.author && (
                                <div className="flex items-start justify-between text-[11px] uppercase tracking-tight gap-4">
                                    <span className="text-gray-400 font-black">Authority</span>
                                    <span className="text-black font-bold text-right truncate max-w-[120px]">
                                        {plant.author}
                                    </span>
                                </div>
                            )}

                            {plant.synonyms && plant.synonyms.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-dashed border-gray-200">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Known Aliases</p>
                                    <p className="text-[10px] text-black font-medium leading-tight">
                                        {plant.synonyms.slice(0, 1).join(', ')}
                                        {plant.synonyms.length > 1 ? '...' : ''}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* CTA Button - Integrated Style */}
                        <div className="mt-auto">
                            <Link
                                href={`/plants/${plant.id}`}
                                className="flex items-center justify-center gap-2 w-full py-3 bg-white border-2 border-black text-xs font-black uppercase tracking-[0.2em] group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none"
                            >
                                View Entry <FaChevronRight className="text-[10px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}