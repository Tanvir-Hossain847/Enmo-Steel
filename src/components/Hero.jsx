import { FaLeaf, FaStar } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#628141]/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#628141]/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#628141] rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-32 w-1 h-1 bg-[#628141] rounded-full animate-ping delay-1000"></div>

      {/* Floating Plant Icons */}
      <div className="absolute top-24 right-32 text-[#628141]/20 animate-float">
        <FaLeaf className="w-8 h-8" />
      </div>
      <div className="absolute bottom-40 left-24 text-[#628141]/15 animate-float delay-500">
        <FaStar className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          {/* Breadcrumb/Navigation Hint */}
          <div className="text-sm text-black uppercase tracking-widest mb-8">
            Welcome to PlantPedia
          </div>
          
          {/* Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-none tracking-tight">
              PlantPedia
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-[#628141]"></div>
              <p className="text-lg md:text-xl text-black">
                Your Plant Encyclopedia
              </p>
              <div className="h-px w-20 bg-[#628141]"></div>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-black text-lg leading-relaxed">
              Discover the fascinating world of plants with our comprehensive database. 
              From medicinal herbs to exotic flowers, explore nature's incredible diversity.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="join w-full shadow-lg">
              <input 
                type="text" 
                placeholder="Search for any plant..." 
                className="input input-bordered input-lg join-item flex-1 text-lg border-2 border-black focus:border-[#628141] focus:outline-none" 
              />
              <button className="btn bg-[#628141] text-white btn-lg join-item px-6 hover:bg-[#628141]/90">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <div className="text-sm text-black mt-2">
              Try searching: "Aloe Vera", "Rose", "Mint" or any plant name
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button className="btn bg-[#628141] text-white btn-lg hover:bg-[#628141]/90 transition-all duration-300 group shadow-lg">
              <span className="flex items-center justify-center gap-2">
                Explore Plants
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="btn btn-outline btn-lg border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 shadow-lg">
              Learn More
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-black">
              <div className="w-2 h-2 bg-[#628141] rounded-full"></div>
              <span className="text-sm">Expert Verified</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <div className="w-2 h-2 bg-[#628141] rounded-full"></div>
              <span className="text-sm">High-Quality Images</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <div className="w-2 h-2 bg-[#628141] rounded-full"></div>
              <span className="text-sm">Detailed Information</span>
            </div>
            <div className="flex items-center gap-2 text-black">
              <div className="w-2 h-2 bg-[#628141] rounded-full"></div>
              <span className="text-sm">Regular Updates</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-12">
            <div className="border-2 border-black p-6 hover:border-[#628141] transition-all group bg-white shadow-lg">
              <div className="text-5xl font-bold text-black group-hover:text-[#628141] transition-colors">500+</div>
              <div className="text-sm text-black mt-2 uppercase tracking-wide">Plant Species</div>
            </div>
            <div className="border-2 border-black p-6 hover:border-[#628141] transition-all group bg-white shadow-lg">
              <div className="text-5xl font-bold text-black group-hover:text-[#628141] transition-colors">1000+</div>
              <div className="text-sm text-black mt-2 uppercase tracking-wide">Uses Documented</div>
            </div>
            <div className="border-2 border-black p-6 hover:border-[#628141] transition-all group bg-white shadow-lg">
              <div className="text-5xl font-bold text-black group-hover:text-[#628141] transition-colors">50+</div>
              <div className="text-sm text-black mt-2 uppercase tracking-wide">Categories</div>
            </div>
          </div>

          {/* Call to Action Footer */}
          <div className="pt-16 pb-8">
            <div className="inline-flex items-center gap-2 text-black text-sm">
              <span>Scroll down to explore</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}