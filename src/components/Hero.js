import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          {/* Title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-none tracking-tight">
              PlantPedia
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-secondary"></div>
              <p className="text-xl md:text-2xl text-gray-600">
                Your Plant Encyclopedia
              </p>
              <div className="h-px w-20 bg-secondary"></div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search for any plant..."
                className="w-full px-8 py-5 pr-16 text-lg border-2 border-black focus:outline-none focus:border-secondary bg-white text-black placeholder-gray-400 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-secondary text-white p-3 hover:bg-secondary/90 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button className="bg-black text-white px-10 py-4 text-lg font-bold hover:bg-secondary hover:text-white transition-all duration-300 group">
              <span className="flex items-center justify-center gap-2">
                Explore Plants
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="border-2 border-black text-black px-10 py-4 text-lg font-bold hover:bg-black hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-12">
            <div className="border-2 border-black p-6 hover:border-secondary transition-all group">
              <div className="text-5xl font-bold text-black group-hover:text-secondary transition-colors">500+</div>
              <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Plant Species</div>
            </div>
            <div className="border-2 border-black p-6 hover:border-secondary transition-all group">
              <div className="text-5xl font-bold text-black group-hover:text-secondary transition-colors">1000+</div>
              <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Uses Documented</div>
            </div>
            <div className="border-2 border-black p-6 hover:border-secondary transition-all group">
              <div className="text-5xl font-bold text-black group-hover:text-secondary transition-colors">50+</div>
              <div className="text-sm text-gray-600 mt-2 uppercase tracking-wide">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
