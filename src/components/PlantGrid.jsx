'use client';

import Link from 'next/link';
import { FaLeaf, FaBook, FaCalendar, FaSeedling } from 'react-icons/fa';

export default function PlantGrid({ plants }) {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                    <div className="p-5 space-y-2">
                        {/* Names */}
                        <h3 className="text-lg font-bold text-black group-hover:text-[#628141] transition-colors">
                            {plant.common_name || 'Unknown Plant'}
                        </h3>
                        <p className="italic text-sm text-black">
                            {plant.scientific_name || 'Scientific name unavailable'}
                        </p>

                        {/* Family */}
                        {plant.family && (
                            <p className="text-sm text-black flex items-center gap-2">
                                <FaSeedling className="text-[#628141]" /> <span className="font-semibold">Family:</span> {plant.family}
                            </p>
                        )}

                        {/* Year */}
                        {plant.year && (
                            <p className="text-sm text-black flex items-center gap-2">
                                <FaCalendar className="text-[#628141]" /> <span className="font-semibold">Year:</span> {plant.year}
                            </p>
                        )}

                        {/* Author */}
                        {plant.author && (
                            <p className="text-sm text-black flex items-center gap-2">
                                <FaBook className="text-[#628141]" /> <span className="font-semibold">Author:</span> {plant.author}
                            </p>
                        )}

                        {/* Synonyms */}
                        {/* Synonyms */}
                        {plant.synonyms && plant.synonyms.length > 0 && (
                            <p className="text-xs text-gray-600 italic">
                                <span className="font-semibold">Synonyms:</span>{' '}
                                {plant.synonyms.slice(0, 1).join(', ')}
                                {plant.synonyms.length > 1 ? '...' : ''}
                            </p>
                        )}


                        {/* Buttons / CTA */}
                        <div className="mt-2">
                            <Link
                                 href={`/plants/${plant.id}`} 
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-sm w-full border-black hover:border-[#628141] hover:bg-[#628141] hover:text-white"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
